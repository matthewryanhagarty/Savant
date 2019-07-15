var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var db = require("./models")

db.sequelize.sync().then(function() {
  require("./controllers/savantController")(app, db.Sequelize);
  require("./controllers/userController")(app, db.Sequelize);
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });