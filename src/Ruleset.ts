import Fuse from "fuse.js";
import Yaml from "js-yaml";
import JSZip from "jszip";
import { throws } from "assert";

export let rul!: Ruleset;

function backLink(id: string, list: string[], to: any, field: string) {
  if (!list) return;
  for (let key of list) {
    let back = to[key];
    back[field] = back[field] || [];
    back[field].push(id);
  }
}

function parseYaml(text: string) {
  let data = [];
  let reg = /^FILE: (.+)\n/gm;
  let matches: RegExpExecArray[] = [];
  let match: RegExpExecArray;
  while ((match = reg.exec(text))) matches.push(match);

  for (let i = 0; i < matches.length; i++) {
    let title = matches[i][1];

    let file: string;
    if (i < matches.length - 1) {
      file = text.substr(
        matches[i].index + 7 + title.length,
        matches[i + 1].index - matches[i].index - 7 - title.length
      );
    } else file = text.substr(matches[i].index + 7 + title.length);

    if (file.substr(1, 3) == "п»ї") file = file.substr(4);

    let parsed;

    try {
      parsed = Yaml.load(file, { json: true, filename: title });
    } catch (e) {
      console.log(e.message);
    }

    if (parsed) data.push(parsed);
  }

  return data;
}

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
  requiresBaseFunc: string[];
  randomProducedItems: [number, { [key: string]: number }][];
  chanceSum: number;

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
        if (!item.manufacture) item.manufacture = {};
        item.manufacture[this.name] = this.producedItems[itemName];
      }
    }

    if (this.requiredItems) {
      for (let itemName of Object.keys(this.requiredItems)) {
        let item = rul.items[itemName];
        if (!item) continue;
        if (!item.componentOf) item.componentOf = {};
        item.componentOf[this.name] = this.requiredItems[itemName];
      }
    }

    if (this.randomProducedItems) {
      this.chanceSum = 0;
      for (let chance of this.randomProducedItems) this.chanceSum += chance[0];
    }

    Service.add("allowsManufacture", this.name, this.requiresBaseFunc);

    Article.create({
      id: this.name,
      section: "MANUFACTURE",
      type_id: "MANUFACTURE"
    });
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
  requiresBaseFunc: string[];
  lookup: string;
  seeAlso: string[];
  spawnedItem: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.research[this.name] = this;

    Service.add("allowsResearching", this.name, this.requiresBaseFunc);

    Article.create({
      id: this.name,
      section: "RESEARCH",
      type_id: "RESEARCH"
    });
  }
}

export class Service {
  constructor(public id: string) {
    Article.create({
      id,
      type_id: "SERVICES",
      section: "SERVICES"
    });
  }

  static add(prop: string, id: string, entries: string[]) {
    if (entries) {
      for (let s of entries) {
        if (!(s in rul.baseServices)) rul.baseServices[s] = new Service(s);
        if (!(prop in rul.baseServices[s])) rul.baseServices[s][prop] = [];
        rul.baseServices[s][prop].push(id);
      }
    }
  }
}

export class AlienDeployment {
  type: string;
  startingCondition: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.alienDeployments[this.type] = this;
    let condition = rul.startingConditions[this.startingCondition];
    if (condition) condition.deployments.push(this.type);
  }
}

export class CraftWeapon {
  type: string;
  requiresBuyBaseFunc: string[];

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.craftWeapons[this.type] = this;
    Service.add("canBuy", this.type, this.requiresBuyBaseFunc);
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

export class Ufo {
  type: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.ufos[this.type] = this;
  }
}

export class Facility {
  type: string;
  provideBaseFunc: string[];
  requiresBaseFunc: string[];
  forbiddenBaseFunc: string[];
  buildCostItems: { [key: string]: { [key: string]: number } };

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.facilities[this.type] = this;

    Service.add("providedBy", this.type, this.provideBaseFunc);
    Service.add("allowsBuilding", this.type, this.requiresBaseFunc);
    Service.add("forbidsBuilding", this.type, this.forbiddenBaseFunc);
  }
}

export class StartingConditions {
  allowedCraft: string[] = [];
  allowedItemCategories: string[] = [];
  allowedArmors: string[] = [];
  allowedVehicles: string[] = [];
  deployments: string[] = [];
  type: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.startingConditions[this.type] = this;
    rul.lang[this.type] = rul.decamelize(this.type.substr(11));
    for (let craft of this.allowedCraft)
      rul.crafts[craft].startingConditions.push(this.type);
    Article.create({
      id: this.type,
      section: "CONDITIONS",
      type_id: "CONDITIONS"
    });
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

let defaultRange = { snap: 15, auto: 7, aim: 200 };

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
  name: string;

  constructor(item: Item, public mode: string) {
    let capMode = mode.charAt(0).toUpperCase() + mode.substr(1);

    let isDefaultAttack =
      (mode == "ammo" && item.battleType == 2) ||
      (mode == "melee" && item.battleType == 3) ||
      (mode == "psi" && item.battleType == 9) ||
      (mode == "throw" && [4, 5].includes(item.battleType));
    let exists = item["accuracy" + capMode] || isDefaultAttack;

    if (!exists) return null;

    if (mode == "melee" && item.battleType != 3) {
      this.damage = item.meleePower;
      this.damageBonus = item.meleeBonus;
      this.damageType = item.meleeType;
    } else if (!item.compatibleAmmo) {
      this.damage = item.power;
      this.damageBonus = item.damageBonus;
      this.damageType = item.damageType;
    }

    this.pellets = item.shotgunPellets || 1;

    this.shots = mode == "auto" ? item.autoShots || 3 : 1;
    this.name = mode.substr(0, 1).toUpperCase() + mode.substr(1);

    let confId = "conf" + this.name;
    if (confId in item) {
      let conf = item[confId];
      if (conf.name) this.name = rul.str(conf.name);
      if (conf.shots) this.shots = conf.shots;
      delete item[confId];
    }

    if (item[mode + "AttackName"])
      this.name = rul.str(item[mode + "AttackName"]);

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

      if (capMode == "Psi") capMode = "Use";

      this.cost = this.cost = item["cost" + capMode] || {
        time: item["tu" + capMode],
        energy: 0
      };

      this.accuracy = item["accuracy" + capMode] || 100;

      let accuracyMultiplier =
        mode == "throw"
          ? item.throwMultiplier
          : mode == "melee"
          ? item.meleeMultiplier
          : item.accuracyMultiplier;

      if (!accuracyMultiplier) {
        let defaultAccuracyStat =
          mode == "throw" ? "throwing" : mode == "melee" ? "melee" : "firing";
        accuracyMultiplier = {};
        accuracyMultiplier[defaultAccuracyStat] = 1;
      }

      this.accuracyMultiplier = accuracyMultiplier;
    }

    if (this.alter && this.alter.ResistType) {
      this.damageType = this.alter.ResistType;
    }

    if (mode + "Range" in item) {
      this.alter = this.alter || {};
      this.alter.range = item[mode + "Range"];
    }

    this.possible = true;
  }
}

export class Article {
  id: string;
  title: string;
  text: string;
  image_id: string;
  type_id: string;
  section: Section;

  static create(raw: any) {
    if (raw.id in rul.articles) {
      let article = rul.articles[raw.id];
      if (raw.section && article.section != raw.section) {
        rul.sections[raw.section].add(article);
      }
      return article;
    }
    return new Article(raw);
  }

  constructor(raw: any) {
    this.id = raw.id;
    this.title = raw.title || rul.str(raw.id);
    rul.lang[this.id] = this.title;
    this.text = rul.lang[raw.text] || rul.lang[raw.id + "_UFOPEDIA"];
    this.image_id = raw.image_id;
    this.type_id = raw.type_id || "-1";
    rul.articles[this.id] = this;

    let id = raw.id;

    rul.articles[id] = this;

    if (raw.section) {
      rul.addToSection(this, raw.section);
    }
  }
}

export class Section {
  title: string;
  _articles: Article[] = [];

  get articles() {
    return this._articles;
  }

  isType() {
    return this.type_id == "TYPE";
  }

  constructor(public id: string, public type_id = "PEDIA") {
    rul.sections[id] = this;

    if (this.isType()) {
      rul.typeSectionsOrder.push(this);
    } else {
      rul.sectionsOrder.push(this);
    }

    this.title = rul.str(id);

    Article.create({ id, section: id, type_id });
  }

  add(article: Article) {
    if (!this._articles.includes(article)) this._articles.push(article);
    if (!article.section) article.section = this;
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
      if (this.spriteInv + ".SPK" in rul.sprites) {
        this.dollSprites = {
          0: [rul.path + rul.sprites[this.spriteInv + ".SPK"].path]
        };
      } else {
        for (let s in rul.sprites) {
          if (s.substr(0, l) == name) {
            this.dollSprites[s.substr(l, s.length - l - 4)] = [
              rul.path + rul.sprites[s].path
            ];
          }
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
      let item = rul.items[this.storeItem];
      if (!item.armors) item.armors = [];
      item.armors.push(this.type);
    }
  }
}

export class Item {
  type: string;
  sprite: string;
  battleType: number;
  invWidth = 1;
  invHeight = 1;
  armors: string[];
  _attacks: Attack[];
  spawnedBy: string[];
  requiresBuyBaseFunc: string[];
  manufacture: { [key: string]: number };
  componentOf: { [key: string]: number };
  bigSprite: string;
  meleePower: number;
  meleeBonus: any;
  meleeType: number;
  power: number;
  damageBonus: any;
  damageType: number;
  shotgunPellets: number;
  meleeAlter: any;
  damageAlter: any;
  compatibleAmmo: any;
  autoShots: number;
  flatRate: boolean;
  meleeMultiplier: any;
  throwMultiplier: any;
  accuracyMultiplier: any;
  compatibleWeapons: any;
  categories: string[];

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.items[raw.type] = this;

    this.sprite = rul.bigSprite[this.bigSprite];

    let t = this as any;

    if ("flatThrow" in t) {
      t.flatThrowTime = t.flatThrow.time;
      delete t.flatThrow;
    }

    Service.add("canBuyItem", this.type, this.requiresBuyBaseFunc);

    if (this.categories) {
      for (let cat of this.categories) this.addCategory(cat);
    }

    Article.create({
      id: this.type,
      type_id: "ITEMS",
      section: "ITEMS"
    });
  }

  attacks() {
    if (!this._attacks) {
      this._attacks = [];
      for (let mode of [
        "ammo",
        "melee",
        "snap",
        "aimed",
        "auto",
        "throw",
        "psi"
      ]) {
        let attack = new Attack(this, mode);
        if (attack.possible) {
          this._attacks.push(attack);
          if (!isNaN(+attack.damageType))
            this.addCategory("dmg=" + rul.damageTypes[attack.damageType]);
          if (attack.damageBonus) {
            for (let k in attack.damageBonus) this.addCategory("dmg*" + k);
            for (let k in attack.accuracyMultiplier)
              this.addCategory("acc*" + k);
          }
        }
      }
    }

    return this._attacks;
  }

  addCategory(catName: string) {
    let cat = rul.categories[catName] || [];
    if (!cat.includes(this)) cat.push(this);
    rul.categories[catName] = cat;
  }
}

export default class Ruleset {
  articles: { [key: string]: Article } = {};
  articlesOrder: Article[] = [];
  sections: { [key: string]: Section } = {};
  sectionsOrder: Section[] = [];
  typeSectionsOrder: Section[] = [];
  sprites: { [key: string]: Sprite } = {};
  raw: any = {};
  search: Search;
  ourArmors: string[];
  items: { [key: string]: Item } = {};
  categories: { [key: string]: Item[] } = {};
  armors: { [key: string]: Armor } = {};
  units: { [key: string]: Unit } = {};
  crafts: { [key: string]: Craft } = {};
  ufos: { [key: string]: Ufo } = {};
  facilities: { [key: string]: Facility } = {};
  craftWeapons: { [key: string]: CraftWeapon } = {};
  alienDeployments: { [key: string]: AlienDeployment } = {};
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
  baseServices: { [key: string]: Service } = {};
  redirect: { [key: string]: string } = {};

  lang: { [key: string]: string } = {};

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
    "STR_DAMAGE_17",
    "STR_DAMAGE_18",
    "STR_DAMAGE_19",
    "STR_DAMAGE_20",
    "STR_DAMAGE_21",
    "STR_DAMAGE_22",
    "STR_MANA",
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
    return num in this[type] ? this.path + this[type][num] : "xpedia/0.png";
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

    let articleTypes = [
      "ITEMS",
      "CONDITIONS",
      "CATEGORIES",
      "RESEARCH",
      "MANUFACTURE",
      "SERVICES"
    ];

    for (let type of articleTypes) new Section(type, "TYPE");

    for (let category of [
      "items",
      "armors",
      "ufopaedia",
      "manufacture",
      "units",
      "alienDeployments",
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

    for (let damage of rul.damageTypes) {
      rul.categories["dmg=" + damage] = [];
      this.redirect[damage] = "dmg=" + damage;
      this.lang["dmg=" + damage] = this.lang[damage];
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

    if (this.raw.extraSounds && this.raw.extraSounds[0])
      this.sounds = this.raw.extraSounds[0].files;

    for (let data of this.raw.items) new Item(data);
    for (let data of this.raw.armors) new Armor(data);
    for (let data of this.raw.units) new Unit(data);
    for (let data of this.raw.crafts) new Craft(data);
    for (let data of this.raw.craftWeapons) new CraftWeapon(data);
    for (let data of this.raw.ufos) new Ufo(data);
    for (let data of this.raw.facilities) new Facility(data);

    if (this.raw.startingConditions)
      for (let data of this.raw.startingConditions)
        new StartingConditions(data);

    for (let data of this.raw.alienDeployments) new AlienDeployment(data);

    for (let data of this.raw.research) new Research(data);

    for (let data of this.raw.manufacture) new Manufacture(data);

    for (let facility of Object.values(this.facilities)) {
      if (facility.buildCostItems) {
        for (let itemName of Object.keys(facility.buildCostItems)) {
          let item = rul.items[itemName];
          if (!item) continue;
          if (!item.componentOf) item.componentOf = {};
          item.componentOf[facility.type] =
            facility.buildCostItems[itemName].build;
          if (!item.manufacture) item.manufacture = {};
          item.manufacture[facility.type] =
            facility.buildCostItems[itemName].refund;
        }
      }
    }

    for (let item of Object.values(this.items)) {
      item.attacks();
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
      backLink(research.name, research.dependencies, rul.research, "leadsTo");
      backLink(research.name, research.getOneFree, rul.research, "freeFrom");

      if (research.lookup && research.name == research.lookup) {
        console.warn(research.lookup + " lookup is to itself");
      }
      if (research.lookup && research.name != research.lookup) {
        let lookup = this.research[research.lookup];
        lookup.seeAlso = lookup.seeAlso || [];
        lookup.seeAlso.push(research.name);
        let lookUpArticle = this.article(research.lookup);
        let article = this.article(research.name);
        if (!rul.lang[article.id]) article.title = lookUpArticle.title;
        article.text = lookUpArticle.text;
        article.image_id = lookUpArticle.image_id;
      }
      if (research.spawnedItem) {
        let item = rul.items[research.spawnedItem];
        item.spawnedBy = item.spawnedBy || [];
        item.spawnedBy.push(research.name);
      }
    }

    this.ourArmors = Object.values(this.armors)
      .filter(a => a.units)
      .map(a => a.type);

    for (let type of articleTypes)
      rul.sections[type]._articles = rul.sections[type].articles.sort((a, b) =>
        a.title < b.title ? -1 : 1
      );

    Article.create({
      id: "BASE_FUNC",
      title: "Base Services",
      type_id: "OTHER",
      section: "OTHER"
    });

    for (let cat of Object.keys(this.categories)) {
      console.log(cat);
      Article.create({
        id: cat,
        title: rul.str(cat),
        type_id: "CATEGORIES",
        section: "CATEGORIES"
      });
    }

    console.log(this);

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
      else str = str.replace(/([^A-Z])([A-Z])/g, "$1" + separ + "$2");
      str = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
    }
    return str;
  }

  sprite(id: string) {
    if (id in this.sprites) return this.path + this.sprites[id].path;

    return this.path + id;
  }

  constructor() {
    rul = this;
  }

  async load(text: string) {
    text = text.trim();

    if (text.substr(0, 6) == "base64") {
      text = text.substr(6);
      let zip = new JSZip();
      await zip.loadAsync(text, { base64: true });
      text = await zip.file("xpedia").async("text");
    }

    let data = parseYaml(text);
    try {
      this.parse(data);
    } catch (e) {
      console.error(e);
    }
  }

  addToSection(article: Article, sectionId: string) {
    let section: Section;

    if (sectionId in rul.sections) section = rul.sections[sectionId];
    else section = rul.sections[sectionId] = new Section(sectionId);

    if (article.id != section.id) section.add(article);

    article.section = section;
    return section;
  }

  linksByType(type: string) {
    switch (type) {
      case "CONDITIONS":
        return Object.keys(this.startingConditions).map(a => "CONDITIONS_" + a);
    }
    return [];
  }

  bodiesCompare(strs: string[]) {
    for (let i in strs) {
      if (strs[i].length == 2)
        strs[i] =
          (strs[i].charAt(0) == "M" ? "A" : "B") + "0" + strs[i].substr(1);
    }
    return strs[0] > strs[1] ? 1 : -1;
  }

  article(id: string) {
    let a = this.articles[this.redirect[id] || id];
    return a;
  }
}
