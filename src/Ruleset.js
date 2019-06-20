import Fuse from "fuse.js";
export var rul;
var Search = /** @class */ (function () {
    function Search() {
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
    Search.prototype.find = function (query) {
        return this.lang.search(query);
    };
    Search.prototype.findArticles = function (query) {
        return this.articles.search(query);
    };
    return Search;
}());
export { Search };
var PediaArticle = /** @class */ (function () {
    function PediaArticle(raw) {
        this.id = raw.id;
        this.title = raw.title || rul.lang[raw.title || raw.id];
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
    return PediaArticle;
}());
export { PediaArticle };
var PediaSection = /** @class */ (function () {
    function PediaSection(id) {
        this.id = id;
        this.articles = [];
        rul.sections[id] = this;
        rul.sectionsOrder.push(this);
        this.title = rul.lang[id];
    }
    PediaSection.prototype.add = function (article) {
        this.articles.push(article);
        article.section = this;
    };
    return PediaSection;
}());
export { PediaSection };
var Sprite = /** @class */ (function () {
    function Sprite(raw) {
        this.id = raw.type || raw.typeSingle;
        if (raw.files) {
            this.path = raw.files[0];
            this.extra = raw.files;
        }
        if (raw.fileSingle)
            this.path = raw.fileSingle;
    }
    return Sprite;
}());
export { Sprite };
var Armor = /** @class */ (function () {
    function Armor(raw) {
        this.dollSprites = {};
        var old = rul.armors[raw.type];
        if (old)
            Object.assign(this, old);
        Object.assign(this, raw);
        rul.armors[raw.type] = this;
        if (this.layersDefinition) {
            var prefix = this.layersDefaultPrefix;
            for (var body in this.layersDefinition) {
                var layersDef = this.layersDefinition[body];
                var layers = [];
                for (var layer in layersDef) {
                    var name_1 = layersDef[layer];
                    if (name_1 && name_1.length) {
                        var id = prefix + "__" + layer + "__" + name_1;
                        layers.push(rul.sprite(id));
                    }
                }
                this.dollSprites[body] = layers;
            }
        }
        if (this.spriteInv) {
            var name_2 = this.spriteInv;
            var l = name_2.length;
            for (var s in rul.spritesById) {
                if (s.substr(0, l) == name_2) {
                    this.dollSprites[s.substr(l, s.length - l - 4)] = [rul.path + rul.spritesById[s].path];
                }
            }
        }
        this.armor = "Front: " + this.frontArmor + ", Side: " + this.sideArmor + ", Rear: " + this.rearArmor + ", Under: " + this.underArmor;
        //WTF
        /*delete this.frontArmor
        delete this.sideArmor
        delete this.rearArmor*/
    }
    return Armor;
}());
export { Armor };
var Item = /** @class */ (function () {
    function Item(raw) {
        var old = rul.items[raw.type];
        if (old)
            Object.assign(this, old);
        Object.assign(this, raw);
        rul.items[raw.type] = this;
        this.sprite = rul.bigSprite[this.bigSprite];
        var t = this;
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
    Item.prototype.damageTypeName = function () {
        return rul.damageTypeName(this.damageType);
    };
    return Item;
}());
export { Item };
var Ruleset = /** @class */ (function () {
    function Ruleset(data) {
        this.lang = {};
        this.langList = [];
        this.articlesById = {};
        this.spritesById = {};
        this.raw = {};
        this.articles = [];
        this.sections = {};
        this.sectionsOrder = [];
        this.items = {};
        this.armors = {};
        this.bigSprite = [];
        this.floorSprite = [];
        this.handSprite = [];
        this.sounds = [];
        this.damageTypes = [
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
        this.battleTypes = [
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
        rul = this;
        this.parse(data);
    }
    Ruleset.prototype.damageTypeName = function (type) {
        return this.lang[this.damageTypes[type]];
    };
    Ruleset.prototype.sound = function (id) {
        return this.path + this.sounds[id];
    };
    Ruleset.prototype.str = function (id) {
        return this.lang[id] || id;
    };
    Ruleset.prototype.specialSprite = function (type, num) {
        return num in this[type] ? this.path + this[type][num] : "0.png";
    };
    Ruleset.prototype.parse = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var file = data_1[_i];
            for (var key in file) {
                if (key.substr(0, 4) == "lang") {
                    Object.assign(this.lang, file[key]);
                }
                if (!(key in this.raw)) {
                    this.raw[key] = file[key];
                }
                else {
                    var old = this.raw[key];
                    var adding = file[key];
                    if (old.concat) {
                        this.raw[key] = old.concat(adding);
                    }
                    else {
                        for (var _a = 0, adding_1 = adding; _a < adding_1.length; _a++) {
                            var k = adding_1[_a];
                            if (k in old)
                                Object.assign(old[k], adding[k]);
                            else
                                old[k] = adding[k];
                        }
                    }
                }
            }
        }
        this.modName = this.raw.modName;
        this.path = "user/mods/" + rul.modName + "/";
        for (var k in this.lang) {
            var text = this.lang[k];
            if (typeof text === "string") {
                text = text.replace(/^({NEWLINE})+/, "");
                text = text.replace(/{NEWLINE}/g, "</br>");
                this.lang[k] = text;
            }
        }
        for (var k in this.lang) {
            if (k)
                this.langList.push({ id: k, text: this.lang[k] });
        }
        this.parsePedia(this.raw.ufopaedia);
        this.parseSprites(this.raw.extraSprites);
        console.log(this.spritesById);
        if (this.spritesById["BIGOBS.PCK"])
            this.bigSprite = this.spritesById["BIGOBS.PCK"].extra;
        if (this.spritesById["FLOOROB.PCK"])
            this.floorSprite = this.spritesById["FLOOROB.PCK"].extra;
        if (this.spritesById["HANDOB.PCK"])
            this.handSprite = this.spritesById["HANDOB.PCK"].extra;
        if (this.raw.extraSounds[0])
            this.sounds = this.raw.extraSounds[0].files;
        for (var _b = 0, _c = this.raw.items; _b < _c.length; _b++) {
            var data_2 = _c[_b];
            new Item(data_2);
        }
        for (var _d = 0, _e = this.raw.armors; _d < _e.length; _d++) {
            var data_3 = _e[_d];
            new Armor(data_3);
        }
        this.search = new Search();
    };
    Ruleset.prototype.parsePedia = function (data) {
        for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
            var articleData = data_4[_i];
            if (articleData.id) {
                var article = new PediaArticle(articleData);
                this.articles.push(article);
                this.articlesById[article.id] = article;
            }
        }
    };
    Ruleset.prototype.parseSprites = function (data) {
        for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
            var spriteData = data_5[_i];
            var sprite = new Sprite(spriteData);
            this.spritesById[sprite.id] = sprite;
        }
    };
    Ruleset.prototype.findNextArticle = function (current, delta) {
        if (!current)
            return null;
        var section = current.section;
        var list = section ? section.articles : this.articles;
        var index = list.findIndex(function (a) { return a.id == current.id; });
        if (index != undefined) {
            var nextIndex = index + delta;
            var nextArticle = list[nextIndex];
            return nextArticle;
        }
    };
    Ruleset.prototype.decamelize = function (str) {
        if (typeof str === "string") {
            str = str.replace(/(.)([A-Z])/g, "$1 $2");
            str = str.substr(0, 1).toUpperCase() + str.substr(1);
        }
        return str;
    };
    Ruleset.prototype.sprite = function (id) {
        if (id in this.spritesById)
            return this.path + this.spritesById[id].path;
        return this.path + id;
    };
    Ruleset.prototype.article = function (id) {
        var article = this.articlesById[id];
        if (article)
            return article;
        var item = this.items[id];
        if (item) {
            var article_1 = new PediaArticle({
                id: id,
                type_id: 4,
                title: this.str(id)
            });
            this.articlesById[id] = article_1;
            return article_1;
        }
    };
    Ruleset.prototype.bodiesCompare = function (strs) {
        for (var i in strs) {
            if (strs[i].length == 2)
                strs[i] = strs[i].charAt(0) + 0 + strs[i].substr(1);
        }
        return strs[0] > strs[1] ? 1 : -1;
    };
    return Ruleset;
}());
export default Ruleset;
