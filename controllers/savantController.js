var path = require("path");
var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public.index.html"));
    });

    app.post("/api/teacher", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/teacher.hmtl"));
    });
    
    app.get("/api/classes", function(req,res) {
        db.Classes.findAll({})
            .then(function(dbClasses){
                res.json(dbClasses);
            });
    });
    
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


};



// var express = require("express");

// var router = express.Router();

// var Savant = require("../models/savant.js");

// // router.post("/", function(req, res) {
// //     savant.
// // })

// module.exports = router;