const fsx = require("fs-extra");
const zipFolder = require("zip-a-folder");

fsx.emptyDirSync("dist");
fsx.copySync("public/xpedia", "dist/xpedia");

for (let f of ["xpedia.js", "xpedia.bat", "XPEDIA_README.txt"])
  fsx.copySync("public/" + f, "dist/" + f);

zipFolder.zipFolder("dist", "xpedia.zip", err => {
  if (err) console.log(err);
});
