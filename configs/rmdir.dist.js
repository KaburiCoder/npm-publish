import * as fs from "fs";

const libDir = "dist";
const libExists = fs.existsSync(libDir);

if (libExists) {
  fs.rmdirSync(libDir, { recursive: true });
}
