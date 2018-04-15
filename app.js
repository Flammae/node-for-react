const express = require("express");
const parseurl = require("parseurl");
const bodyParser = require("body-parser");
const path = require("path");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
const Signature = require("./models/Signature.js");

const url = "mongodb://localhost:27017/signatures";
mongoose.connect(url, function(err, db) {
  if (err) {
    console.log("Unable to connect to the mongoDB server. Error:", err);
  } else {
    console.log("Connection established to", url);
  }
});

const app = express();

app.get("/", (req, res) => {
  res.json({ it: "worked" });
});

app.get("/api/signatures", (req, res) => {
  Signature.find({})
    .then(eachOne => {
      res.json(eachOne);
    })
    .catch(err => console.log(err));
});

app.post("api/signatures", (req, res) => {
  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageofGuest
  }).then(signature => {
    res.send(signature);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is listening on port " + port);
});
