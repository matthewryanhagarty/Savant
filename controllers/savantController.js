var express = require("express");

var router = express.Router();

var Savant = require("../models/savant.js");

// router.post("/", function(req, res) {
//     savant.
// })
 

router.get("/api/key", function(req, res) {
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

module.exports = router;