import Fuse from "fuse.js";

export let rul!: Ruleset;

export class Search {
  lang: Fuse<{ id: string; text: string }>;
  articles: Fuse<PediaArticle>;

  constructor() {
    console.log(Fuse);
    this.lang = new Fuse(rul.langList, {
      keys: ["id", "text"],
      tokenize: true,
      matchAllTokens: true,

      distance: 0,
      threshold: 0
    });

    this.articles = new Fuse(rul.articles, {
      keys: ["id", "title", "text"],
      tokenize: true,
      matchAllTokens: true,

      distance: 0,
      threshold: 0
    });
  }

  find(query: string) {
    return this.lang.search(query);
  }

  findArticles(query: string) {
    return this.articles.search(query);
  }
}

export class PediaArticle {
  id: string;
  title: string;
  text: string;
  image_id: string;
  type_id: number;
  section: PediaSection;

  constructor(raw: any) {
    this.id = raw.id;
    this.title = rul.lang[raw.title || raw.id];
    this.text = rul.lang[raw.text] || rul.lang[raw.id + "_UFOPEDIA"];
    this.image_id = raw.image_id;
    this.type_id = raw.type_id;

    if (raw.section) {
      if (!(raw.section in rul.sections)) {
        rul.sections[raw.section] = new PediaSection(raw.section);
      }

      rul.sections[raw.section].add(this);
    }
  }
}

export class PediaSection {
  articles: PediaArticle[] = [];
  title: string;

  constructor(public id: string) {
    rul.sections[id] = this;
    rul.sectionsOrder.push(this);
    this.title = rul.lang[id];
  }

  add(article: PediaArticle) {
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

export class Armor{
  type: string;
  sprite: string;
  [key: string]: any;

  constructor(raw: any) {
    let old = rul.armors[raw.type];
    if (old) Object.assign(this, old);
    Object.assign(this, raw);
    rul.armors[raw.type] = this;
  }

}

export class Item{
  type: string;
  sprite: string;
  [key: string]: any;

  constructor(raw: any) {
    let old = rul.items[raw.type];
    if (old) Object.assign(this, old);
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

  damageTypeName() {
    return rul.lang[rul.damageTypes[this.damageType]];
  }
}

export default class Ruleset {
  lang: { [key: string]: string } = {};
  langList: { id: string; text: string }[] = [];
  articlesById: { [key: string]: PediaArticle } = {};
  spritesById: { [key: string]: Sprite } = {};
  raw: any = {};
  articles: PediaArticle[] = [];
  search: Search;
  sections: { [key: string]: PediaSection } = {};
  sectionsOrder: PediaSection[] = [];
  items: { [key: string]: Item } = {};
  armors: { [key: string]: Armor } = {};
  bigSprite: string[] = [];
  floorSprite: string[] = [];
  handSprite: string[] = [];
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

    this.modName = this.raw.modName;
    this.path = "user/mods/" + rul.modName + "/";

    for (let k in this.lang) {
      let text: string = this.lang[k];
      if (typeof text === "string") {
        text = text.replace(/^({NEWLINE})+/, "");
        text = text.replace(/{NEWLINE}/g, "</br>");
        this.lang[k] = text;
      }
    }

    for (let k in this.lang) {
      if (k) this.langList.push({ id: k, text: this.lang[k] });
    }

    this.parsePedia(this.raw.ufopaedia);
    this.parseSprites(this.raw.extraSprites);

    console.log(this.spritesById)

    if(this.spritesById["BIGOBS.PCK"])
      this.bigSprite = this.spritesById["BIGOBS.PCK"].extra;
    if(this.spritesById["FLOOROB.PCK"])
      this.floorSprite = this.spritesById["FLOOROB.PCK"].extra;
    if(this.spritesById["HANDOB.PCK"])
      this.handSprite = this.spritesById["HANDOB.PCK"].extra;

    if(this.raw.extraSounds[0])
      this.sounds = this.raw.extraSounds[0].files;

    for (let data of this.raw.items) new Item(data);
    for (let data of this.raw.armors) new Armor(data);

    this.search = new Search();

    console.log(this.armors);
  }

  parsePedia(data: any) {
    for (let articleData of data) {
      if (articleData.id) {
        let article = new PediaArticle(articleData);
        this.articles.push(article);
        this.articlesById[article.id] = article;
      }
    }
  }

  parseSprites(data: any) {
    for (let spriteData of data) {
      let sprite = new Sprite(spriteData);
      this.spritesById[sprite.id] = sprite;
    }
  }

  findNextArticle(current: PediaArticle, delta: number) {
    if (!current) return null;
    let section = current.section;
    let list = section ? section.articles : this.articles;
    let index = list.findIndex(a => a.id == current.id);
    if (index != undefined) {
      let nextIndex = index + delta;
      let nextArticle = list[nextIndex];
      return nextArticle;
    }
  }

  decamelize(str){
    str = str.replace(/(.)([A-Z])/g, "$1 $2")
    str = str.substr(0,1).toUpperCase() + str.substr(1)
    return str
  }

  sprite(id:string){
    if(id in this.spritesById)
      return this.spritesById[id].path
    return this.path + id
  }

  constructor(data: any) {
    rul = this;
    this.parse(data);
  }
}
