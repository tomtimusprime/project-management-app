const router = require("express").Router();
const userController = require("../controllers/userController");


router
    .route("/api/user")
    .get(userController.findUser)
    .post(userController.createUser);

router
    .route("/api/user/projects")
    .post(userController.addProject)

module.exports = router; 