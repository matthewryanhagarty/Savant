require('dotenv').config();
var path = require("path");
var uuid = require("uuid/v4");
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

    
    // Route to Create a User Page
    app.get("/users/register", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/html/signUp.html"));
    });

    app.get("/users/profile", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/user.html"));
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
    // app.get("/api/users/:uuid", function(req,res) {
    //     db.User.findAll({
    //         where: {
    //             uuid: req.params.uuid
    //         }
    //     })
    //     .then(function(dbUser){
    //         res.json(dbUser);
    //     });
    // });

    // Search Specific User
    app.get("/api/users/:uuid", function(req,res) {
        db.User.findOne({
            where: {
                name: req.params.uuid
            },
            include: [db.Classes]
        })
            .then(function(dbUser){
                res.json(dbUser);
            });
    });

    // Create a New Class
    app.post("/classes/register", function(req,res) {

        function getLiveLink() {
            var embed;
//TODO: Add YT API to get link/id/embed

            if (embed) return embed; else return "N/A"
        }

        console.log(req.body);
        db.Classes.create({
          title: req.body.title,
          desc: req.body.desc,
          date: req.body.date,
          liveLink: getLiveLink(),
          teacher: req.body.teacher,
          categ: req.body.categ,
          uuid: uuid()
        })
          .then(function(dbClass) {
            // res.sendFile(path.resolve(__dirname,'../public/html/index.html'));
            // res.sendFile(__dirname, '../public/html/index.html');
            res.json({status: true});
            // console.log(dbClass);
          });
    });
    
};