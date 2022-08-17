/** @format */

let User = require(`./user`);
let Comment = require(`./comments`);

let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let userId = Schema.Types.ObjectId;
let commentId = Schema.Types.ObjectId;

let articleSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    tags: { type: String },
    likes: { type: Number, default: 0 },
    author: userId,
    comments: { type: String },
  },
  { timestamps: true }
);

let Article = mongoose.model(`Article`, articleSchema);

module.exports = Article;
