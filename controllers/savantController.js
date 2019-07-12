var path = require("path");
var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public.index.html"));
    });

    app.get("/api/classes", function(req,res) {
        db.Classes.findAll({})
            .then(function(dbClasses){
                res.json(dbClasses);
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