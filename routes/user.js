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
    .route("/api/user/projects/inProgress/:id")
    .post(userController.updateProjectProgress)

// router
//     .route("/api/user/projects/completed/:id")
//     .put(userController.updateProjectCompleted)

router
    .route("/api/user/issues/:projectId")
    .post(userController.addIssue)
    .put(userController.updateIssue)

router.route('/api/projects/:id')
.get(userController.findProject)

module.exports = router; 