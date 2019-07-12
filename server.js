var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./controllers/savantController")(app);
require("./controllers/userController")(app);
var db = require("./models")

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });