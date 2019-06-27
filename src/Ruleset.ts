import Fuse from "fuse.js";
import { utimes } from "fs";

export let rul!: Ruleset;

export class Search {
  articles: Fuse<Article>;

  constructor() {
    this.articles = new Fuse(rul.articlesOrder, {
      keys: ["id", "type", "title", "text"],
      tokenize: true,
      matchAllTokens: true,

      distance: 10,
      threshold: 0.1
    });
  }

  findArticles(query: string) {
    return this.articles.search(query);
  }
}

export class Manufacture {
  name: string;
  requires: string;
  producedItems: { [key: string]: number };
  requiredItems: { [key: string]: number };

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.manufacture[this.name] = this;

    if (this.requires) {
      for (let resName of this.requires) {
        let res = rul.research[resName];
        if (!res.manufacture) res.manufacture = [];
        res.manufacture.push(this.name);
      }
    }

    if (this.producedItems) {
      for (let itemName of Object.keys(this.producedItems)) {
        let item = rul.items[itemName];
        if (!item) continue;
        if (!item.manufacture) item.manufacture = [];
        item.manufacture.push(this.name);
      }
    }

    if (this.requiredItems) {
      for (let itemName of Object.keys(this.requiredItems)) {
        let item = rul.items[itemName];
        if (!item) continue;
        if (!item.componentOf) item.componentOf = [];
        item.componentOf.push(this.name);
      }
    }

  }
}

export class Research {
  name: string;
  getOneFree: string[];
  unlocks: string[];
  dependencies: string[];
  leadsTo: string[];
  freeFrom: string[];
  manufacture: string[];

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.research[this.name] = this;
  }
}

export class CraftWeapon {
  type: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.craftWeapons[this.type] = this;
  }
}

export class Craft {
  type: string;
  startingConditions: string[] = [];

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.crafts[this.type] = this;
  }
}

export class StartingConditions {
  allowedCraft: string[];
  type: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.startingConditions[this.type] = this;
    if (this.allowedCraft) {
      for (let craft of this.allowedCraft) {
        rul.crafts[craft].startingConditions.push(this.type);
      }
    }
  }
}

export class Stats {
  tu: number;
  stamina: number;
  health: number;
  bravery: number;
  reactions: number;
  firing: number;
  throwing: number;
  strength: number;
  psiStrength: number;
  psiSkill: number;
  melee: number;
}

export class Unit {
  type: string;
  stats: Stats;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.units[this.type] = this;
    let armor = rul.armors[raw.armor];
    if (armor) {
      armor.users = armor.users || [];
      armor.users.push(this.type);
    }
  }
}

export class Attack {
  possible = false;
  cost: { time: number; energy: number };
  flatTime = false;
  damage: number;
  damageBonus: { [key: string]: number };
  damageType: number;
  accuracy: number;
  accuracyMultiplier: { [key: string]: number };
  alter: { [key: string]: number };
  shots: number = 1;
  range: number;
  pellets: number = 1;

  constructor(item: Item, public mode: string) {
    let capMode = mode.charAt(0).toUpperCase() + mode.substr(1);

    let isDefaultAttack =
      (mode == "melee" && item.battleType == 3) ||
      (item.battleType == 2 && mode == "ammo");
    let exists = item["accuracy" + capMode] || isDefaultAttack;

    if (!exists) return null;

    if (mode == "melee" && item.battleType == 1) {
      this.damage = item.meleePower;
      this.damageBonus = item.meleeBonus;
      this.damageType = item.meleeType;
    } else if (!item.compatibleAmmo) {
      this.damage = item.power;
      this.damageBonus = item.damageBonus;
      this.damageType = item.damageType;
    }

    this.pellets = item.shotgunPellets || 1;

    if (mode == "auto") this.shots = item.autoShots || 3;

    if (mode == "melee") this.alter = item.meleeAlter;

    if (item.battleType == 3 || mode != "melee") this.alter = item.damageAlter;

    if (mode != "ammo") {
      if (
        ((mode == "melee" && item.battleType == 3) || mode != "melee") &&
        item.flatRate
      )
        this.flatTime = item.flatRate;

      if (item["flat" + capMode] && item["flat" + capMode].time)
        this.flatTime = true;

      this.cost = this.cost = item["cost" + capMode] || {
        time: item["tu" + capMode],
        energy: 0
      };

      this.accuracy = item["accuracy" + capMode];

      if (mode == "melee") this.accuracyMultiplier = item.meleeMultiplier;
      else this.accuracyMultiplier = item.accuracyMultiplier;

      if (!this.accuracyMultiplier) {
        let defaultAccuracyStat = mode == "melee" ? "melee" : "fire";
        this.accuracyMultiplier = {};
        this.accuracyMultiplier[defaultAccuracyStat] = 1;
      }

      if (this.accuracyMultiplier.flatHundred) {
        this.accuracy = this.accuracyMultiplier.flatHundred * 100;
        delete this.accuracyMultiplier.flatHundred;
      }
    }

    this.possible = true;
  }
}

export class Article {
  id: string;
  title: string;
  text: string;
  image_id: string;
  type_id: number;
  section: Section;

  constructor(raw: any) {
    this.id = raw.id;
    this.title = raw.title || rul.lang[raw.title || raw.id];
    this.text = rul.lang[raw.text] || rul.lang[raw.id + "_UFOPEDIA"];
    this.image_id = raw.image_id;
    this.type_id = raw.type_id;
    this.section = raw.section;

    if (raw.section) {
      if (!(raw.section in rul.sections)) {
        rul.sections[raw.section] = new Section(raw.section);
      }

      rul.sections[raw.section].add(this);
    }
  }
}

export class Section {
  articles: Article[] = [];
  title: string;

  constructor(public id: string) {
    rul.sections[id] = this;
    rul.sectionsOrder.push(this);
    this.title = rul.lang[id];
  }

  add(article: Article) {
    this.articles.push(article);
    article.section = this;
  }
}

export class Sprite {
  id: string;
  path: string;
  extra: string[];

  constructor(raw: any) {
    this.id = raw.type || raw.typeSingle;
    if (raw.files) {
      this.path = raw.files[0];
      this.extra = raw.files;
    }
    if (raw.fileSingle) this.path = raw.fileSingle;
  }
}

export class Armor {
  type: string;
  sprite: string;
  dollSprites: { [key: string]: string[] } = {};
  armor: { [key: string]: number } = {};
  users: string[];
  [key: string]: any;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.armors[raw.type] = this;

    if (this.layersDefinition) {
      let prefix = this.layersDefaultPrefix;
      for (let body in this.layersDefinition) {
        let layersDef = this.layersDefinition[body];
        let layers = [];
        for (let layer in layersDef) {
          let name = layersDef[layer];
          if (name && name.length) {
            let id = prefix + "__" + layer + "__" + name;
            layers.push(rul.sprite(id));
          }
        }
        this.dollSprites[body] = layers;
      }
    } else if (this.spriteInv) {
      let name: string = this.spriteInv;
      let l = name.length;
      for (let s in rul.sprites) {
        if (s.substr(0, l) == name) {
          this.dollSprites[s.substr(l, s.length - l - 4)] = [
            rul.path + rul.sprites[s].path
          ];
        }
      }
    }

    this.armor = {
      Front: this.frontArmor,
      Side: this.sideArmor,
      Rear: this.rearArmor,
      Under: this.underArmor
    };

    if (this.storeItem && rul.items[this.storeItem]) {
      rul.items[this.storeItem].armor = this.type;
    }
  }
}

export class Item {
  type: string;
  sprite: string;
  battleType: number;
  invWidth = 1;
  invHeight = 1;
  [key: string]: any;
  _attacks: Attack[];

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.items[raw.type] = this;

    this.sprite = rul.bigSprite[this.bigSprite];

    let t = this as any;

    if ("flatThrow" in t) {
      t.flatThrowTime = t.flatThrow.time;
      delete t.flatThrow;
    }

    if ("confAuto" in t) {
      t.autoName = rul.lang[t.confAuto.name];
      t.autoShots = t.confAuto.shots;
      delete t.confAuto;
    }
  }

  attacks() {
    if (!this._attacks) {
      this._attacks = [];
      for (let mode of ["ammo", "melee", "snap", "aimed", "auto"]) {
        let attack = new Attack(this, mode);
        if (attack.possible) this._attacks.push(attack);
      }
    }

    return this._attacks;
  }

  damageTypeName() {
    return rul.damageTypeName(this.damageType);
  }
}

export default class Ruleset {
  lang: { [key: string]: string } = {};
  articles: { [key: string]: Article } = {};
  articlesOrder: Article[] = [];
  sections: { [key: string]: Section } = {};
  sectionsOrder: Section[] = [];
  sprites: { [key: string]: Sprite } = {};
  raw: any = {};
  search: Search;
  items: { [key: string]: Item } = {};
  armors: { [key: string]: Armor } = {};
  units: { [key: string]: Unit } = {};
  crafts: { [key: string]: Craft } = {};
  craftWeapons: { [key: string]: CraftWeapon } = {};
  research: { [key: string]: Research } = {};
  manufacture: { [key: string]: Manufacture } = {};
  startingConditions: { [key: string]: StartingConditions } = {};
  bigSprite: string[] = [];
  floorSprite: string[] = [];
  handSprite: string[] = [];
  baseSprite: string[] = [];
  sounds: string[] = [];
  modName: string;
  path: string;
  damageTypes = [
    "STR_DAMAGE_NONE",
    "STR_DAMAGE_ARMOR_PIERCING",
    "STR_DAMAGE_INCENDIARY",
    "STR_DAMAGE_HIGH_EXPLOSIVE",
    "STR_DAMAGE_LASER_BEAM",
    "STR_DAMAGE_PLASMA_BEAM",
    "STR_DAMAGE_STUN",
    "STR_DAMAGE_MELEE",
    "STR_DAMAGE_ACID",
    "STR_DAMAGE_SMOKE",
    "STR_DAMAGE_10",
    "STR_DAMAGE_11",
    "STR_DAMAGE_12",
    "STR_DAMAGE_13",
    "STR_DAMAGE_14",
    "STR_DAMAGE_15",
    "STR_DAMAGE_16",
    "STR_DAMAGE_17"
  ];
  battleTypes = [
    "None (Geoscape-only item)",
    "Firearm",
    "Ammo",
    "Melee",
    "Grenade",
    "Proximity Grenade",
    "Medi-Kit",
    "Motion Scanner",
    "Mind Probe",
    "Psi-Amp",
    "Electro-flare",
    "Corpse"
  ];

  damageTypeName(type: number) {
    return this.lang[this.damageTypes[type]];
  }

  sound(id: number) {
    return this.path + this.sounds[id];
  }

  str(id: string) {
    return this.lang[id] || id;
  }

  specialSprite(type: string, num: number) {
    return num in this[type] ? this.path + this[type][num] : "0.png";
  }

  parse(data: any) {
    for (let file of data) {
      for (let key in file) {
        if (key.substr(0, 4) == "lang") {
          Object.assign(this.lang, file[key]);
        }
        if (!(key in this.raw)) {
          this.raw[key] = file[key];
        } else {
          let old = this.raw[key];
          let adding = file[key];
          if (old.concat) {
            this.raw[key] = old.concat(adding);
          } else {
            for (let k of adding) {
              if (k in old) Object.assign(old[k], adding[k]);
              else old[k] = adding[k];
            }
          }
        }
      }
    }

    for (let category of [
      "items",
      "armors",
      "ufopaedia",
      "manufacture",
      "units",
      "research"
    ]) {
      let merged = {};
      for (let data of this.raw[category]) {
        let id = data.type || data.id || data.name || data.delete;
        if ("delete" in data) {
          delete merged[id];
        } else {
          if (id && id in merged) {
            Object.assign(merged[id], data);
          } else {
            merged[id] = data;
          }
        }
      }
      this.raw[category] = Object.values(merged);
    }

    this.modName = this.raw.modName;
    this.path = "user/mods/" + rul.modName + "/";

    for (let k in this.lang) {
      let text: string = this.lang[k];
      if (typeof text === "string") {
        text = text.replace(/^({NEWLINE})+/, "");
        text = text.replace(/{NEWLINE}/g, "<br/>");
        this.lang[k] = text;
      }
    }

    this.parsePedia(this.raw.ufopaedia);
    this.parseSprites(this.raw.extraSprites);

    if (this.sprites["BIGOBS.PCK"])
      this.bigSprite = this.sprites["BIGOBS.PCK"].extra;
    if (this.sprites["FLOOROB.PCK"])
      this.floorSprite = this.sprites["FLOOROB.PCK"].extra;
    if (this.sprites["HANDOB.PCK"])
      this.handSprite = this.sprites["HANDOB.PCK"].extra;
    if (this.sprites["BASEBITS.PCK"])
      this.baseSprite = this.sprites["BASEBITS.PCK"].extra;

    if (this.raw.extraSounds[0]) this.sounds = this.raw.extraSounds[0].files;

    for (let data of this.raw.items) new Item(data);
    for (let data of this.raw.armors) new Armor(data);
    for (let data of this.raw.units) new Unit(data);
    for (let data of this.raw.crafts) new Craft(data);
    for (let data of this.raw.craftWeapons) new CraftWeapon(data);
    for (let data of this.raw.startingConditions) new StartingConditions(data);
    for (let data of this.raw.research) new Research(data);
    for (let data of this.raw.manufacture) new Manufacture(data);

    for (let item of Object.values(this.items)) {
      if (item.compatibleAmmo) {
        for (let ammoId of item.compatibleAmmo) {
          let ammo = this.items[ammoId];
          if (ammo) {
            ammo.compatibleWeapons = ammo.compatibleWeapons || [];
            ammo.compatibleWeapons.push(item.type);
          }
        }
      }
    }

    for (let research of Object.values(this.research)) {
      if (research.dependencies) {
        for (let depname of research.dependencies) {
          let dep = this.research[depname];
          dep.leadsTo = dep.leadsTo || [];
          dep.leadsTo.push(research.name);
        }
      }
      if (research.getOneFree) {
        for (let depname of research.getOneFree) {
          let dep = this.research[depname];
          dep.freeFrom = dep.freeFrom || [];
          dep.freeFrom.push(research.name);
        }
      }
    }

    this.search = new Search();
  }

  parsePedia(data: any) {
    for (let articleData of data) {
      if (articleData.id) {
        let article = new Article(articleData);
        this.articlesOrder.push(article);
        this.articles[article.id] = article;
      }
    }
  }

  parseSprites(data: any) {
    for (let spriteData of data) {
      let sprite = new Sprite(spriteData);
      this.sprites[sprite.id] = sprite;
    }
  }

  findNextArticle(current: Article, delta: number) {
    if (!current) return null;
    let section = current.section;
    let list = section ? section.articles : this.articlesOrder;
    let index = list.findIndex(a => a.id == current.id);
    if (index != undefined) {
      let nextIndex = index + delta;
      let nextArticle = list[nextIndex];
      return nextArticle;
    }
  }

  decamelize(str, separ = " ") {
    if (typeof str === "string") {
      if (str.includes("_") && str.search(/[a-z]/) == -1)
        str = str.replace(/_/g, " ");
      else str = str.replace(/(.)([A-Z])/g, "$1" + separ + "$2");
      str = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
    }
    return str;
  }

  sprite(id: string) {
    if (id in this.sprites) return this.path + this.sprites[id].path;

    return this.path + id;
  }

  constructor(data: any) {
    rul = this;
    this.parse(data);
  }

  article(id: string) {
    if (!id || typeof id != "string") {
      return null;
    }

    let article = this.articles[id];
    if (article) return article;

    if (id.substr(0, 6) == "PEDIA_") {
      let article = new Article({
        id,
        type_id: -1,
        title: this.str(id.substr(6))
      });
      return article;
    }

    let item = this.items[id];

    if (item) {
      let article = new Article({
        id,
        type_id: 4,
        section: "STR_WEAPONS_AND_EQUIPMENT",
        title: this.str(id)
      });
      this.articles[id] = article;
      return article;
    }

    if (this.research[id] || this.manufacture[id]) {
      let article = new Article({
        id,
        title: this.str(id)
      });
      this.articles[id] = article;
      return article;
    }
  }

  bodiesCompare(strs: string[]) {
    for (let i in strs) {
      if (strs[i].length == 2)
        strs[i] =
          (strs[i].charAt(0) == "M" ? "A" : "B") + "0" + strs[i].substr(1);
    }
    return strs[0] > strs[1] ? 1 : -1;
  }
}
