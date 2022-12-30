import fs from "fs";
import path from "path";

console.log(path.dirname(process.execPath));

const filename: string = path.dirname(process.execPath) + "/settings.json";

const files: any = JSON.parse(fs.readFileSync(filename, { encoding: "utf8" }));

export default files;
