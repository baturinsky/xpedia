import Fuse from "fuse.js";
import { utimes } from "fs";

export let rul!: Ruleset;

export class Search {
  lang: Fuse<{ id: string; text: string }>;
  articles: Fuse<Article>;

  constructor() {    
    this.lang = new Fuse(rul.langList, {
      keys: ["id", "text"],
      tokenize: true,
      matchAllTokens: true,

      distance: 0,
      threshold: 0
    });

    this.articles = new Fuse(rul.articles, {
      keys: ["id", "type", "title", "text"],
      tokenize: true,
      matchAllTokens: true,

      distance: 10,
      threshold: 0.1
    });
  }

  find(query: string) {
    return this.lang.search(query);
  }

  findArticles(query: string) {
    return this.articles.search(query);
  }
}

export class Attack{
  possible = false
  cost: {time:number, energy:number}
  flatTime = false
  damage: number
  damageBonus: {[key:string]: number}
  damageType: number
  accuracy: number  
  accuracyMultiplier: {[key:string]: number}
  alter: {[key:string]: number}
  shots: number = 1
  range: number
  pellets: number = 1

  constructor(item:Item, public mode:string){
    let capMode = mode.charAt(0).toUpperCase() + mode.substr(1)
    
    let isDefaultAttack = (mode == "melee" && item.battleType == 3) || (item.battleType == 2 && mode == "ammo");
    let exists = item["accuracy" + capMode] || isDefaultAttack;

    if(!exists)
      return null;

    if(mode == "melee" && item.battleType == 1) {
      this.damage = item.meleePower
      this.damageBonus = item.meleeBonus
      this.damageType = item.meleeType
    } else if(!item.compatibleAmmo){
      this.damage = item.power
      this.damageBonus = item.damageBonus
      this.damageType = item.damageType
    }    

    this.pellets = item.shotgunPellets || 1

    if(mode == "auto" && item.autoShots)
      this.shots = item.autoShots

    if(mode == "melee")
      this.alter = item.meleeAlter

    if(item.battleType == 3 || mode != "melee")
      this.alter = item.damageAlter
      
    if(mode != "ammo"){

      if((mode == "melee" && item.battleType == 3 || mode != "melee") && item.flatRate)
        this.flatTime = item.flatRate
    
      if (item["flat" + capMode] && item["flat" + capMode].time)
        this.flatTime = true

      this.cost = this.cost = item["cost" + capMode] || {time:item["tu" + capMode], energy:0}    

      this.accuracy = item["accuracy" + capMode]

      this.accuracyMultiplier = item.accuracyMultiplier

      if(mode == "melee" || !this.accuracyMultiplier)
        this.accuracyMultiplier = item.meleeMultiplier
            
      if(!this.accuracyMultiplier){
        let defaultAccuracyStat = mode == "melee"? "melee" : "fire"
        this.accuracyMultiplier = {}
        this.accuracyMultiplier[defaultAccuracyStat] = 1
      }

      if(this.accuracyMultiplier.flatHundred){
        this.accuracy = this.accuracyMultiplier.flatHundred * 100
        delete this.accuracyMultiplier.flatHundred
      }
    }

    this.possible = true
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
    this.section = raw.section

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

export class Armor{
  type: string;
  sprite: string;
  dollSprites: {[key:string]:string[]} = {};
  armor:string
  [key: string]: any;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.armors[raw.type] = this;

    if(this.layersDefinition){
      let prefix = this.layersDefaultPrefix    
      for(let body in this.layersDefinition){
        let layersDef = this.layersDefinition[body]
        let layers = []
        for (let layer in layersDef){
          let name = layersDef[layer]
          if(name && name.length){
            let id = prefix + "__" + layer + "__" + name
            layers.push(rul.sprite(id))
          }
        }
        this.dollSprites[body] = layers
      }
    }

    else if(this.spriteInv){
      let name:string = this.spriteInv
      let l = name.length      
      for(let s in rul.spritesById){
        if(s.substr(0,l) == name){
          this.dollSprites[s.substr(l, s.length - l - 4)] = [rul.path + rul.spritesById[s].path]
        }
      }
    }
    
    this.armor = "Front: " + this.frontArmor + ", Side: " + this.sideArmor + ", Rear: " + this.rearArmor + ", Under: " + this.underArmor
  }  
}

export class Item{
  type: string;
  sprite: string;
  battleType: number;
  [key: string]: any;
  _attacks:Attack[]

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

  attacks(){
    if(!this._attacks) {
      this._attacks = []
      for(let mode of ["ammo", "melee", "snap", "aimed", "auto"]){
        let attack = new Attack(this, mode)
        if(attack.possible)
          this._attacks.push(attack)
      }
    }

    return this._attacks
  }

  damageTypeName() {
    return rul.damageTypeName(this.damageType);
  }
}

export default class Ruleset {
  lang: { [key: string]: string } = {};
  langList: { id: string; text: string }[] = [];
  articlesById: { [key: string]: Article } = {};
  spritesById: { [key: string]: Sprite } = {};
  raw: any = {};
  articles: Article[] = [];
  search: Search;
  sections: { [key: string]: Section } = {};
  sectionsOrder: Section[] = [];
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
  ]

  damageTypeName(type:number){
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

    for (let category of ["items", "armors", "ufopaedia", "manufacture"]){
      let merged = {};
      for(let data of this.raw[category]){
        let id = data.type || data.id || data.name || data.delete
        if('delete' in data){
          delete merged[id]
        } else {
          if(id && id in merged){
            Object.assign(merged[id], data)
          } else {
            merged[id] = data
          }
        }
      }      
      this.raw[category] = Object.values(merged)
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

    for (let k in this.lang) {
      if (k) this.langList.push({ id: k, text: this.lang[k] });
    }

    this.parsePedia(this.raw.ufopaedia);
    this.parseSprites(this.raw.extraSprites);

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

  }

  parsePedia(data: any) {
    for (let articleData of data) {
      if (articleData.id) {
        let article = new Article(articleData);
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

  findNextArticle(current: Article, delta: number) {
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
    if(typeof str === "string"){
      str = str.replace(/(.)([A-Z])/g, "$1 $2")
      str = str.substr(0,1).toUpperCase() + str.substr(1)
    }
    return str
  }

  sprite(id:string){
    if(id in this.spritesById)
      return this.path + this.spritesById[id].path
    
    return this.path + id
  }

  constructor(data: any) {
    rul = this;
    this.parse(data);
  }

  article(id:string){
    let article = this.articlesById[id];
    if(article)
      return article;

    if(id.substr(0,6) == "PEDIA_"){
      let article = new Article({
        id,
        type_id:-1,
        title:this.str(id.substr(6))
      })
      return article
    }    

    let item = this.items[id]
    
    if(item){
      let article = new Article({
        id,
        type_id:4,
        section:"STR_WEAPONS_AND_EQUIPMENT",
        title:this.str(id)
      })
      this.articlesById[id] = article
      return article
    }
  }

  bodiesCompare(strs:string[]){
    for(let i in strs){
      if(strs[i].length==2)
        strs[i] = (strs[i].charAt(0)=="M"?'A':'B') + '0' + strs[i].substr(1)
    }
    return strs[0] > strs[1]? 1: -1
  }
}
