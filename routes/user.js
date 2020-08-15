const router = require("express").Router();
const userController = require("../controllers/userController");


router
    .route("/api/user")
    .get(userController.findUser)
    .post(userController.createUser)
    .delete(userController.removeUser)

router
    .route("/api/allUsers")
    .get(userController.findAllUsers)

router
    .route("/api/user/projects")
    .post(userController.addProject)
    .put(userController.removeProject);

router
    .route("/api/user/projects/inProgress/:id")
    .post(userController.updateProjectProgress)

router
    .route("/api/public/project/:email/:id")
    .get(userController.findPublicProject)

router
    .route("/api/user/issues/:projectId")
    .post(userController.addIssue)
    .put(userController.updateIssue)

router
    .route("/api/project/comment")
    .post(userController.addComment)

module.exports = router; 