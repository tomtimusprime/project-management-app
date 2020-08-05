const passport = require("passport");
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const router = express.Router();
// const db = require("../mysql-models");
const jwtSecret = require("../config/jwt-config");


// Passport
require("../config/passport")(passport);
router.use(cookieParser());

//API route setup
router.get(
  "/api",
  function (req, res, next) {
    passport.authenticate('jwt', async function (err, mongoUser, info) {
      if (mongoUser) {
        console.log("Access granted for user with JWT")
        res.json(mongoUser);
      } else {
        console.log("Access denied for user with JWT")
        res.json({ loggedIn: false })
      }
    })(req, res, next);
  });


//cookie setup after initial login, i need front end to send Oauth user and will exchange MongoUser
router.post(
  "/cookiesetup-mongouser", async (req, res) => {
    if (req.cookies.jwt === undefined) {
      const payload = {
        email: req.body.email,
        exp: Date.now()
      };
      const token = jwt.sign(JSON.stringify(payload), jwtSecret.secret);
      res.cookie("jwt", token, { httpOnly: true, secure: false, exp: { maxAge: 600000 } });
    }
    //look up user with req.body.email if no user add new user
    //res.json(MongoUser);

  }
);


//logout
router.post("/logout", function (req, res, next) {
  if (req.cookies.jwt) {
    res.clearCookie("jwt");
    return res.json({ logOut: true });
  } else {
    //user cookie expired so no need to delete cookie
    return res.json({ logOut: true });
  }
})



module.exports = router;
