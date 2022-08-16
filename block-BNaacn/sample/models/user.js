/** @format */

let mongoose = require(`mongoose`);
let Schema = mongoose.Schema;

// create a user schema with following fields and type

let userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },

    password: { type: String, minlength: 5 },
    createdAt: { type: Date, default: new Date() },
    favorites: [String],
  },
  { timestamps }
);

let User = mongoose.model(`User`, userSchema);

module.exports = User;
