require("dotenv").config();

const express = require("express");
const app = express();

const router = require("./routes/token");

app.use(express.json());

app.use("/api/v1", router);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
