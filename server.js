require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
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

// console.log(process.env.MONGO_URL)
// Connect to the MongoAtlasDB
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser: true});

  const startServer = async () => {
  
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:3000/ in your browser.`);
    });
  };
startServer();