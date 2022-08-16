/** @format */

let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, min: 18, max: 25 },
    favorites: [String],
    marks: [Number],

    email: { type: String, lowercase: true, trim: true, match: /@/ },
    password: { type: String, minlength: 5, maxlength: 15 },
    createdAt: { type: Date, default: new Date() },
  },
  { timestamps: true }
);
