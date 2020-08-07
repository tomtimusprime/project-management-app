require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const app = express();
// const db = require("./mysql-models");
const PORT = process.env.PORT || 3001;
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(userRoutes);


console.log(process.env.MONGO_URL)
// Connect to the Mongo DB
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser: true});

// Start the API server and Connect to the mySQL DB
const syncOptions = { force: false };
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-znif8qv4.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'aplus.project.com',
  issuer: 'https://dev-znif8qv4.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

  const startServer = async () => {
    // await db.sequelize.sync(syncOptions);
  
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:3000/ in your browser.`);
    });
  };
startServer();