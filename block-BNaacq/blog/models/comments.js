/** @format */

let User = require(`./user`);
let Article = require(`./articles`);
let mongoose = require(`mongoose`);
let Schema = mongoose.Schema;
let userId = Schema.Types.ObjectId;
let articleId = Schema.Types.ObjectId;

let commentSchema = new Schema(
  {
    content: { type: String },
    author: userId,
    article: articleId,
  },
  { timestamps: true }
);

let Comment = mongoose.model(`Comment`, commentSchema);

module.exports = Comment;
