/** @format */

let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true, match: /@/ },
    age: { type: Number, min: 18, max: 20 },
    favorite: [String],
    marks: [Number],
  },
  { timestamps }
);

let User = mongoose.model(`User`, userSchemas);
module.exports = User;




