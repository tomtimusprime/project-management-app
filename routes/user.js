const router = require("express").Router();
const userController = require("../controllers/userController");


router
    .route("/api/user")
    .get(userController.findUser)
    .post(userController.createUser);

router
    .route("/api/user/projects")
    .post(userController.addProject)

router
    .route("/api/user/projects/progress")
    .put(userController.updateProjectProgress)

router
    .route("/api/user/projects/completed")
    .put(userController.updateProjectCompleted)

router
    .route("/api/user/issues")
    .post(userController.addIssue)
    .get(userController.updateIssue)

module.exports = router; 