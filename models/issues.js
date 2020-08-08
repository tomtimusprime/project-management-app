const { Schema, model } = require("mongoose");

const issuesSchema = new Schema({
    issueName: String,
    projectName: String,
    description: String,
    priority: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const Issues = model("Issues", issuesSchema);

module.exports = Issues;