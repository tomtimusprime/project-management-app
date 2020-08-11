const router = require("express").Router();
const userController = require("../controllers/userController");


router
    .route("/api/user")
    .get(userController.findUser)
    .post(userController.createUser)
    .delete(userController.removeUser)

router
    .route("/api/user/projects")
    .post(userController.addProject)
    .put(userController.removeProject);

router
    .route("/api/user/projects/inProgress/:id")
    .post(userController.updateProjectProgress)

// router
//     .route("/api/user/projects/completed/:id")
//     .put(userController.updateProjectCompleted)

router
    .route("/api/user/issues/:projectId")
    .post(userController.addIssue)
    .put(userController.updateIssue)


module.exports = router; 