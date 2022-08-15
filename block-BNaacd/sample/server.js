/** @format */

let express = require(`express`);
let logger = require(`morgan`);
const { default: mongoose } = require("mongoose");

mongoose.connect(`mongodb://localhost/sample`, err => {
  console.log(err ? err : `database connected`);
});

let app = express();

app.use(logger(`dev`));

app.get(`/`, (req, res) => {
  res.send(`Welcome `);
});

app.listen(5000, () => {
  console.log(`server listening on port 5k`);
});
