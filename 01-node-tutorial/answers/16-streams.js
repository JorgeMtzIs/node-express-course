const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  encoding: "utf-8",
  highWaterMark: 10,
});
let counter = 0;

stream.on("data", (result) => {
  counter++;
  console.log(result);
});
stream.on("end", () => {
  console.log("Number of chunks: ", counter);
});
stream.on("error", (e) => {
  console.log("Received error: ", e);
});
