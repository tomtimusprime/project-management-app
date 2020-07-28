const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type: String, requered: true},
  date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;