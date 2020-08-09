const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  issueName: {
    type: String,
    required: true
  },
  priority: String,
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
})

const projectSchema = new Schema({
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
  },
  issues: [issueSchema]
})

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  projects: [projectSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = User; 