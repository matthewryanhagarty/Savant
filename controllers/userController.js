var express = require("express");

var router = express.Router();

var User = require("../models/user.js");

router.post("/api/register", function(req, res) {
    console.log("This is working");
    var user = req.body;
    console.log(user);
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        classes: req.body.classes,
        contact: req.body.contact,
        avatar: req.body.avatar
    })
})

module.exports = router;