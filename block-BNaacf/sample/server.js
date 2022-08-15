/** @format */

let express = require(`express`);
let logger = require(`morgan`);
const { default: mongoose } = require("mongoose");

mongoose.connect(`mongodb://localhost/sample`, err => {
  console.log(err ? err : `database connected`);
});

let app = express();

app.use(logger(`dev`));





app.listen(6000, () => {
  console.log(`server listening on port 6k`);
});
