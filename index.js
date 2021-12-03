const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  console.log("gotted");
  res.send({ msg: "Hello World!" });
});

app.listen(3000);
