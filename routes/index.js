var express = require("express");
var router = express.Router();
var Suggestion = require("../models/suggestions.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Don't Go First" });
});

router.post("/suggest", function (req, res) {
  const newSuggestion = new Suggestion({ content: req.body.suggestion });
  newSuggestion.save().then(function (curSuggestion, err) {
    res.send({ res: "Success" });
  });
});

module.exports = router;
