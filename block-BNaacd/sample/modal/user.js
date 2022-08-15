/** @format */

let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { timestamps: true }
);

userSchema = new Schema({
  email: { type: String, lowercase },
});
