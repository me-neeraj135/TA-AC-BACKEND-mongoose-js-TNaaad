/** @format */

let express = require(`express`);
let logger = require(`morgan`);
let cookieParser = require(`cookie-parser`);
const { default: mongoose } = require("mongoose");

mongoose.connect(
  "mongodb://localhost/sample",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    console.log(err ? err : `connected to database`);
  }
);

let app = express();

app.get(`/`, (req, res) => {
  res.send(`Welcome to mongoose`);
});
app.listen(4000, () => {
  console.log(`server listening on port 4k`);
});
