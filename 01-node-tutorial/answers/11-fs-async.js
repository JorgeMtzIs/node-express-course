const fs = require("fs");
console.log("start");
fs.writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("Error thrown: ", err);
  } else {
    fs.writeFile(
      "./temporary/fileB.txt",
      "This is line 2\n",
      { flag: "a" },
      (err, result) => {
        console.log("at point 2");
        if (err) {
          console.log("Error thrown: ", err);
        } else {
          fs.writeFile(
            "./temporary/fileB.txt",
            "This is line 3\n",
            { flag: "a" },
            (err, result) => {
              console.log("at point 3");
              if (err) {
                console.log("Error thrown: ", err);
              } else {
                return;
              }
            }
          );
        }
      }
    );
  }
});
console.log("end");
