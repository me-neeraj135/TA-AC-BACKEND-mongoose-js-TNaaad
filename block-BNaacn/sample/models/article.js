/** @format */

let mongoose = require(`mongoose`);
let Schema = mongoose.Schema;

//  Create an article Schema with fields

let articleSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    tags: [String],
    createdAt: { type: Date, default: new Date() },
  },
  { timestamps }
);

let Article = mongoose.model(`Article`, articleSchema);

module.exports = Article;
