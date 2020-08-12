const router = require("express").Router();
const userRoute = require("./user");
const authRoute = require("./auth");
const path = require('path')

router.use([authRoute, userRoute]);
router.use((req, res) => {
  switch (process.env.NODE_ENV) {
    case 'dev':
    res.sendFile(path.join(__dirname, '../client/public/index.html'))
      break;
    case 'production':
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    default:
      break;
  }
});

module.exports = router; 