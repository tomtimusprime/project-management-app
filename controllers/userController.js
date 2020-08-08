const db = require("../models");
const passport = require("passport")
require("../config/passport")(passport);


module.exports = {
  //Create User
  createUser: function (req, res, next) {
    passport.authenticate('jwt', async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT")
        db.User
          .create({ email: req.body.email })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT")
        res.json({ loggedIn: false })
      }
    })(req, res, next);
  },
  //Find User
  findUser: function (req, res, next) {
    passport.authenticate('jwt', async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log(mongoUser)
        console.log("Access granted for user with JWT")
        db.User
          .find({ email: mongoUser[0].email })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT")
        res.json({ loggedIn: false })
      }
    })(req, res, next);
  },
  //Add Project to User
  addProject: function (req, res, next) {
    passport.authenticate('jwt', async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT")
        db.User
          .update({}, {})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT")
        res.json({ loggedIn: false })
      }
    })(req, res, next);
  }
}