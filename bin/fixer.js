const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

const fixer = (dir) => {
  if (!dir) {
    console.error('No export directory provided try with "./out"');
    return;
  }
  try {
    const pages = globSync(`${path.normalize(dir) || "./out"}/**/*.html`, {
      ignore: [`./out/**/index.html`, `./out/index.html`],
    });
    for (const p of pages) {
      const [filename, ...path] = p.split("/").reverse();
      const [name, ext] = filename.split(".");
      if (name === "index") {
        continue;
      }
      path.reverse();
      fs.mkdirSync(`${path.join("/")}/${name}/`);
      fs.renameSync(p, `${path.join("/")}/${name}/index.${ext}`);
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { fixer };
