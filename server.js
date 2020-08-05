require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// const db = require("./mysql-models");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


console.log(process.env.MONGO_URL)
// Connect to the Mongo DB
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});

// Start the API server and Connect to the mySQL DB
const syncOptions = { force: false };

  const startServer = async () => {
    // await db.sequelize.sync(syncOptions);
  
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:3000/ in your browser.`);
    });
  };
startServer();