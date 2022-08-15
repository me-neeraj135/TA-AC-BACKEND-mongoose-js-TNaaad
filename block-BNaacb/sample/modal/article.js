/** @format */

let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let articleSchema = Schema({
  name: String,
  author: String,
  releaseYear: Number,
});
