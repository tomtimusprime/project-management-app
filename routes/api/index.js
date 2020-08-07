const router = require("express").Router();
const profileRoutes = require("./profile");
const authRoutes = require("./auth");

router.use("/profile", profileRoutes);
router.use("/auth", authRoutes);

module.exports = router;