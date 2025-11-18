const fs = require("fs");

fs.writeFileSync("./temporary/fileA.txt", "This is line 1\n");
fs.writeFileSync("./temporary/fileA.txt", "This is line 2\n", {
  flag: "a",
});
fs.writeFileSync("./temporary/fileA.txt", "This is line 3\n", {
  flag: "a",
});

const file = fs.readFileSync("./temporary/output.txt", "utf-8");
console.log(file);
