const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  issueName: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now()
  },
  completed: {
    type: Boolean,
    default: false
  },
  priority: String,
  description: String
})

const commentSchema = new Schema({
  userEmail:{
    type: String,
    required: true
  },
  comment:{
    type: String,
    required: true
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
  private: {
    type: Boolean,
    default: true
  },
  removed: {
    type: Boolean,
    default: false
  },
  Date: {
    type: Date,
    default: Date.now()
  },
  description: String,
  issues: [issueSchema],
  comments: [commentSchema]
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