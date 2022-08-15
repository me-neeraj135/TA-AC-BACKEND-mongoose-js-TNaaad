/** @format */

let express = require(`express`);
let logger = require(`morgan`);
let cookieParser = require(`cookie-parser`);
const { default: mongoose } = require("mongoose");

mongoose.connect(`mongodb://localhost/sample`, err => {
  console.log(err ? err : `connected to database`);
});

let app = express();

app.use(logger(`dev`));

app.get(`/`, (req, res) => {
  res.send(`welcome mongoose`);
});
app.listen(3000, () => {
  console.log(`server listening on port 3k`);
});
