const router = require("express").Router();
const userController = require("../controllers/userController");


router
    .route("/api/user")
    .get(userController.findAll)
    .post(userController.createUser);

module.exports = router; 