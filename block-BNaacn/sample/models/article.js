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
    likes: { type: Number, default: 0 },
  },
  { timestamps }
);

let Article = mongoose.model(`Article`, articleSchema);

module.exports = Article;
