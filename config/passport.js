const JwtStrategy = require("passport-jwt").Strategy;
const jwtSecret = require("./jwt-config");
const db = require("../models");

module.exports = passport => {
  const opts = {
    jwtFromRequest: req => {
      return req.cookies.jwt;
    },
    secretOrKey: jwtSecret.secret
  };

  passport.use(
    "jwt",
    new JwtStrategy(opts, async (jwtpayload, cb) => {
      const data = await db.User.findOne({where: { email: jwtpayload.email }});
      if (data) {
        return cb(null, data, {loggedIn:true});
      } else {
        
        return cb(null, false);
      }
    })
  );
};

