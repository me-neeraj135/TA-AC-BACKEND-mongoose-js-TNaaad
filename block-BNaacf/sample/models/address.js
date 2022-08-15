/** @format */

let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let addressSchema = new Schema({
  village: String,
  city: String,
  sate: String,
  user: Schema.Types.ObjectId(),
});
