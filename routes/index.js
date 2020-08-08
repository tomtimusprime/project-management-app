const router = require("express").Router();
const userRoute = require("./user");
const authRoute = require("./auth");


router.use([authRoute,userRoute]);
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

module.exports = router; 