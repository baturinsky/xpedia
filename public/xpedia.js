const fs = require("fs");
const pako = require("./xpedia/pako_deflate.min.js");
const JsYaml = require("./xpedia/js-yaml.min.js");

let configJSON = fs.readFileSync(process.argv.slice(2).join(" ") || "./xpedia/config.json")

let config = JSON.parse(configJSON);

makeFiles(config);

function makeFiles(config) {
  for (let lang of config.languages) {
    let config1 = {};
    Object.assign(config1, config);
    delete config1.languages;
    Object.assign(config1, lang);

    config1.extra_language_yaml = (config.extra_language_yaml || []).concat(
      lang.extra_language_yaml || []
    );

    config1.extra_rul = (config.extra_rul || []).concat(
      lang.extra_rul || []
    );
    
    config1.extra_text = {};
    Object.assign(config1.extra_text, config.extra_text);
    Object.assign(config1.extra_text, lang.extra_text);

    console.log(JSON.stringify(config1));

    makeFile(config1);
  }
}

function makeFile(config) {
  let text = makeFileText(config);

  fs.writeFileSync(config.save_as, text);

  if (config.run) run(config.saveAs);
}

function makeFileText(config) {
  let pedia_header = "xpedia/xpedia.html.header";
  let header = fs.readFileSync(pedia_header);

  let text = makePlainText(config);
  if (config.packed) {
    let packed = pako.deflate(text, {level: 9});
    let packed_base64 = Buffer.from(packed).toString("base64");
    return header + "base64\n" + packed_base64;
  } else {
    return header + escape(text);
  }
}

function escape(s) {
  let lookup = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };
  return s.replace(/[&<>]/g, c => lookup[c]);
}

function makePlainText(config) {
  let mods_path = config.mods_path || "user/mods";

  let vanilla_rules_path = config.vanilla_rules_path || "standard/xcom1";
  let vanilla_language_path =
    vanilla_rules_path + "/Language/" + config.language + ".yml";

  let mod_rules_path = mods_path + "/" + config.mod_name + "/Ruleset";
  let mod_language_path =
    mods_path +
    "/" +
    config.mod_name +
    "/Language/" +
    (config.mod_language || config.language) +
    ".yml";

  let backup_language_path =
    config.backup_language &&
    mods_path +
      "/" +
      config.mod_name +
      "/Language/" +
      config.backup_language +
      ".yml";

  let all = [];

  let vanillaFiles = loadDir(vanilla_rules_path);
  let modFiles = loadDir(mod_rules_path);

  let files = vanillaFiles.concat(modFiles);

  for (let f of files) {
    if (!f.includes(".rul")) continue;
    all.push([f, fs.readFileSync(f)]);
  }

  for (let f of config.extra_rul) {
    all.push([f, fs.readFileSync(f)]);
  }

  let lang = [];
  lang.push("langv-" + fs.readFileSync(vanilla_language_path));

  if (backup_language_path && backup_language_path != mod_language_path)
    lang.push("langb-" + fs.readFileSync(backup_language_path));

  lang.push("langm-" + fs.readFileSync(mod_language_path));

  for (let i in config.extra_language_yaml) {
    lang.push(`langl-${i}-${fs.readFileSync(config.extra_language_yaml[i])}`);
  }

  all.push(["Language", lang.join("\n")]);

  if(config.json)
    all = all.map(([filename, text]) => ["JSON@" + filename, jsonify(text, filename)]);  

  for (let i in config.extra_text) {
    all.push([`TEXT@${i}`, fs.readFileSync(config.extra_text[i])]);
  }

  all.push(["JSON@xpedia", configJSON]);

  let text = all.map(([filename, text]) => `FILE: ${filename}\n${text}`).join("\n");  
  return text;
}

function jsonify(file, filename){
  let parsed = JsYaml.load(file, { json: true, filename, onWarning: e => {
    console.log(filename);
    console.log(e.message);
  }});
  return config.packed?JSON.stringify(parsed):JSON.stringify(parsed, null, 2);
}

function loadDir(path) {
  return fs.readdirSync(path).map(n => path + "/" + n);
}

function run(url) {
  let start =
    process.platform == "darwin"
      ? "open"
      : process.platform == "win32"
      ? "start"
      : "xdg-open";
  require("child_process").exec(start + " " + url);
}

/*
    `FILE: xpedia
  modName: '${config.mod_name}'  
  `
  ];*/
