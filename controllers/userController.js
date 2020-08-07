const db = require("../models");
require("../config/passport")(passport);


// Defining methods for the ProfilesController
module.exports = {
  createUser: function(req, res,next){
    passport.authenticate('jwt', async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT")
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      } else {
        console.log("Access denied for user with JWT")
        res.json({ loggedIn: false })
      }
    })(req, res, next);
  }
};