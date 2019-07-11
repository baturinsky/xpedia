const fs = require("fs");
const JSZip = require("./xpedia/jszip.min.js");

let packed = true;
let saveAs = "xpedia.html";

let mod_name = "Piratez";
let language_name = "en-US";

let mod_rules_path = "user/mods/" + mod_name + "/Ruleset";
let mod_language_path =
  "user/mods/" + mod_name + "/Language/" + language_name + ".yml";
let vanilla_rules_path = "standard/xcom1";
let vanilla_language_path = "standard/xcom1/Language/" + language_name + ".yml";
let pedia_header = "xpedia/xpedia.html.header";

let vanillaFiles = fs
  .readdirSync(vanilla_rules_path)
  .map(n => vanilla_rules_path + "/" + n);
let modFiles = fs
  .readdirSync(mod_rules_path)
  .map(n => mod_rules_path + "/" + n);

let files = vanillaFiles.concat(modFiles);

let all = [
  `FILE: xpedia
{modName: ` +
    mod_name +
    `}`
];

let header = fs.readFileSync(pedia_header)

for (let f of files) {
  if (!f.includes(".rul")) continue;
  all.push("FILE: " + f);
  all.push(fs.readFileSync(f));
}

all.push("FILE: Language");

all.push("langv-" + fs.readFileSync(vanilla_language_path));
all.push("langm-" + fs.readFileSync(mod_language_path));

let text = all.join("\n");

if (packed) {
  let zip = new JSZip();
  zip.file("xpedia", text);
  zip
    .generateAsync({
      type: "base64",
      compression: "DEFLATE",
      compressionOptions: {
        level: 8
      }
    })
    .then(zipped => {
      fs.writeFileSync(saveAs, header + "base64\n" + zipped);
    });
} else {
  fs.writeFileSync(saveAs, header + text);
}


var url = saveAs;
var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);
