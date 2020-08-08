const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  projects: [{
    projectName: String,
    completed: {
      type: Boolean,
      default: false
    },
    inProgress: {
      type: Boolean,
      default: false
    },
    Date: {
      type: Date,
      default: Date.now()
    }
  }],
  issues: [{
    type: Schema.Types.ObjectId,
    ref: "Issues"
  }],
  Date: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User; 