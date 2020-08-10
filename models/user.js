const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  issueName: {
    type: String,
    required: true
  },
  priority: String,
  description: String,
  Date: {
    type: Date,
    default: Date.now()
  },
  completed: {
    type: Boolean,
    default: false
  }
})

// const contributorSchema = new Schema({
//   name: {
//     type: String, 
//     required: true
//   },
//   link: String
// })

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
  description: String,
  issues: [issueSchema],
  priority: String,

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