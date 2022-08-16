/** @format */

let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  { timestamps }
);

let Article = mongoose.model(`Article`, articleSchema);

module.exports = Article;
