const db = require("../models");
const passport = require("passport");
require("../config/passport")(passport);
const mongoose = require("mongoose");

module.exports = {
  //Create User
  createUser: function (req, res, next) {
    passport.authenticate("jwt", async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT");
        db.User.create({ email: monogoUser[0].email })
          .then((dbModel) => {
            db.User.find({ email: mongoUser[0].email })
              .populate("issues")
              .then((data) => {
                res.json(data);
              });
          })
          .catch((err) => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT");
        res.json({ loggedIn: false });
      }
    })(req, res, next);
  },
  //Find User
  findUser: function (req, res, next) {
    passport.authenticate("jwt", async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT");
        db.User.find({ email: mongoUser[0].email })
          .populate("issues")
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT");
        res.json({ loggedIn: false });
      }
    })(req, res, next);
  },
 
  //Add Project to User
  addProject: function (req, res, next) {
    passport.authenticate("jwt", async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT");
        db.User.update(
          { email: mongoUser[0].email },
          { $push: { projects: req.body } }
        )
          .then((dbModel) => {
            db.User.find({ email: mongoUser[0].email })
              .populate("issues")
              .then((data) => {
                res.json(data);
              });
          })
          .catch((err) => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT");
        res.json({ loggedIn: false });
      }
    })(req, res, next);
  },

  updateProjectProgress: function (req, res, next) {
    passport.authenticate("jwt", async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT");
        const path = `projects.$[j].${req.body.field}`;
        const query = path + " : " + req.body.field;
        console.log(query);
        console.log(req.body);
        console.log(req.params.id);
        if (req.body.field === "completed") {
          db.User.update(
            {
              email: mongoUser[0].email,
            },
            { $set: { "projects.$[j].completed": req.body.status } },
            {
              arrayFilters: [
                { "j._id": mongoose.Types.ObjectId(req.params.id) },
              ],
            }
          )
            .then((data) => {
              res.json(data);
            })
            .catch((err) => res.status(422).json(err));
        } else if (req.body.field === "inProgress") {
          db.User.update(
            {
              email: mongoUser[0].email,
            },
            { $set: { "projects.$[j].inProgress": req.body.status } },
            {
              arrayFilters: [
                { "j._id": mongoose.Types.ObjectId(req.params.id) },
              ],
            }
          ).then(
            db.User.find({ email: mongoUser[0].email })
              .populate("issues")
              .then((data) => {
                res.json(data);
              })
              .catch((err) => res.status(422).json(err))
          );
        }
      } else {
        console.log("Access denied for user with JWT");
        res.json({ loggedIn: false });
      }
    })(req, res, next);
  },

  //Add Issue to User
  addIssue: async (req, res, next) => {
    passport.authenticate("jwt", async function (err, mongoUser, info) {
      console.log(mongoUser);
      if (mongoUser) {
        console.log("Access granted for user with JWT");
        db.User.update(
          {
            email: mongoUser[0].email,
          },
          { $push: { "projects.$[j].issues": req.body } },
          {
            arrayFilters: [
              { "j._id": mongoose.Types.ObjectId(req.params.projectId) },
            ],
          }
        )
          .then((data) => {
            db.User.find({ email: mongoUser[0].email })
              .populate("issues")
              .then((data) => {
                res.json(data);
              })
          })
          .catch((err) => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT");
        res.json({ loggedIn: false });
      }
    })(req, res, next);
  },
  //update Issue
  updateIssue: function (req, res, next) {
    passport.authenticate("jwt", async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT");
        console.log(req.body);
        db.User.update(
          {
            email: mongoUser[0].email,
          },
          {
            $set: { "projects.$[j].issues.$[h].completed": req.body.completed },
          },
          {
            arrayFilters: [
              { "j._id": mongoose.Types.ObjectId(req.params.projectId) },
              { "h._id": mongoose.Types.ObjectId(req.body.issueId) },
            ],
          }
        )
          .then((data) => {
            db.User.find({ email: mongoUser[0].email })
            .populate("issues")
            .then((data) => {
              res.json(data);
            })
          })
          .catch((err) => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT");
        res.json({ loggedIn: false });
      }
    })(req, res, next);
  },
};
