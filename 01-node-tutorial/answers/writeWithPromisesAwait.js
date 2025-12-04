const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("./temp.txt", "This is line 1\n");
    await writeFile("./temp.txt", "This is line 2\n", { flag: "a" });
    await writeFile("./temp.txt", "This is line 3\n", { flag: "a" });
  } catch (err) {
    console.log(err);
  }
};

const reader = async () => {
  try {
    result = await readFile("./temp.txt", "utf-8");
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (e) {
    console.log(e);
  }
};

readWrite();
