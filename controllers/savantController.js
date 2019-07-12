var path = require("path");
var db = require("../models");

module.exports = function(app) {

    // Route to Landing Page
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public.index.html"));
    });

    // Route to Create a Class Page
    app.get("/api/teacher", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/teacher.hmtl"));
    });

    // Display All Classes
    app.get("/api/classes", function(req,res) {
        db.Classes.findAll({})
            .then(function(dbClasses){
                res.json(dbClasses);
            });
    });

    // Search Specific Class
    app.get("/api/classes/:title", function(req,res) {
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

    app.post("/api/users/register", function(req,res) {
    
    });
    

};



// var express = require("express");

// var router = express.Router();

// var Savant = require("../models/savant.js");

// // router.post("/", function(req, res) {
// //     savant.
// // })

// module.exports = router;