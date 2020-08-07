const db = require("../models");
require("../config/passport")(passport);


// Defining methods for the ProfilesController
module.exports = {
  createToken: function (req, res) {
    if (req.cookies.jwt === undefined) {
      const payload = {
        email: req.body.email,
        exp: Date.now()
      };
      const token = jwt.sign(JSON.stringify(payload), jwtSecret.secret);
      res.cookie("jwt", token, { httpOnly: true, secure: false, exp: { maxAge: 600000 } });
    }
    db.User
      .find(req.body.email)
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
    //look up user with req.body.email if no user add new user
    //res.json(MongoUser);

  }
};