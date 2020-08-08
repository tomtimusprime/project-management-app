const router = require("express").Router();
const authController = require("../controllers/authController");


router
    .route("/cookie")
    .post(authController.createToken);

module.exports = router; 