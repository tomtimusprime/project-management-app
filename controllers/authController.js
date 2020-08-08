const db = require("../models");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwt-config");

module.exports = {
    //create token and MongoAtlas user account.... send front end MongoAtlas user.
    createToken: function (req, res, next) {
        if(req.cookies.jwt === undefined){
            const payload = {
                email: req.body.email,
                expire: Date.now()
            };
            const token = jwt.sign(JSON.stringify(payload), jwtSecret.secret);
            res.cookie("jwt", token, { httpOnly: true, secure: false, expire: { maxAge: 600000 } });
        }
        console.log(req.body)
        db.User
            .find({email:req.body.email}).populate("issues")
            .then((dbUser) => {
                if(dbUser.length === 0){
                    db.User.create({email:req.body.email, projects:{projectName:"New Project"}})
                    .then((dbUser)=>{
                        console.log(dbUser);
                        res.json(dbUser);
                    })
                }else{
                    console.log("userFound");
                    console.log(dbUser);
                    res.json(dbUser);
                }
            })
            .catch(err => res.status(422).json(err));
    },
    deleteToken: function (req, res, next) {
        if(req.cookies.jwt){
            res.clearCookie("jwt");
            res.json({logOut:true});
        }else{
            res.json({logOut:true});
        }
    }
};