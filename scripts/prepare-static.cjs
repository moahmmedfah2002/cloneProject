const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const mappings = [
  ["cdn", path.join("public", "cdn")],
  ["checkouts", path.join("public", "checkouts")],
];

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

for (const [fromRel, toRel] of mappings) {
  const from = path.join(root, fromRel);
  const to = path.join(root, toRel);

  if (!fs.existsSync(from)) continue;
  copyRecursive(from, to);
}

console.log("Static assets prepared.");
