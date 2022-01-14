const fs = require("fs");
const path = require("path");
// asyncrone
fs.readFile("./t1.txt", "utf-8", (err, data) => {
  console.log(data);
});
// syncrone
const text = fs.readFileSync("./t1.txt", "utf-8");
console.log(text);
console.log("=================");

fs.readdir("./forTxt", (err, data) => {
  console.log(data);
  data.forEach((file) => {
    console.log(file, path.extname(file), "extantion");
    console.log(fs.statSync(`./forTxt/${file}`).size + "b");
  });
});
// for building file
fs.writeFile("./forTxt/buildingFile.txt", "my builder file111", (err) => {
  if (err) {
    console.log(err);
  }
});
