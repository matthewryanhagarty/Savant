require('dotenv').config();
var path = require("path");
var db = require("../models");

module.exports = function(app) {

    // Route to Landing Page
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    // Route to Create a Class Page
    app.get("/classes/register", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/html/teacher.html"));
    });
  
    app.get("/api/key", function(req, res) {
      res.json(
        {
          apiKey: process.env.firebase_apiKey,
          authDomain: process.env.firebase_authDomain,
          databaseURL: process.env.firebase_databaseURL,
          projectId: process.env.firebase_projectId,
          storageBucket: process.env.firebase_storageBucket,
          messagingSenderId: process.env.firebase_messagingSenderId,
          appId: process.env.firebase_appId
        }
      )
    })

    // Display All Classes
    app.get("/api/classes", function(req,res) {
        db.Classes.findAll({})
            .then(function(dbClasses){
                res.json(dbClasses);
            });
    });

    // Search Specific Class
    app.get("/api/classes/find/:title", function(req,res) {
        db.User.findAll({
            where: {
                title: req.params.title
            }
        })
            .then(function(dbClass){
                res.json(dbClass);
            });
        });

    // Display All Users
    app.get("/api/users", function(req,res) {
        db.User.findAll({})
        .then(function(dbUser){
            res.json(dbUser);
        });
    });

    // Search Specific User
    app.get("/api/users/:name", function(req,res) {
        db.User.findAll({
            where: {
                name: req.params.name
            }
        })
            .then(function(dbUser){
                res.json(dbUser);
            });
    });

    // Create a New Class
    app.post("/classes/register", function(req,res) {
        console.log(req.body);
        db.Classes.create({
          title: req.body.title,
          desc: req.body.desc,
          date: req.body.date,
          liveLink: req.body.liveLink,
          teacher: req.body.teacher,
          categ: req.body.categ,
          uuid: req.body.uuid
        })
          .then(function(dbClass) {
            res.json(dbClass);
          });
    });
    
};