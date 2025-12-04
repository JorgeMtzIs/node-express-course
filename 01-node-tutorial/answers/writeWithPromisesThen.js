const { writeFile, readFile } = require("fs").promises;
console.log("line 1");
writeFile("./temp.txt", "This is line 1\n")
  .then(() => {
    console.log("line 2");
    return writeFile("./temp.txt", "This is line 2\n", { flag: "a" });
  })
  .then(() => {
    console.log("line 3");
    return writeFile("./temp.txt", "This is line 3\n", { flag: "a" });
  })
  .then(() => {
    console.log("read");
    return readFile("./temp.txt", "utf-8");
  })
  .then((result) => {
    console.log("write to console");
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
