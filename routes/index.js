var express = require("express");
var router = express.Router();
var Suggestion = require("../models/suggestions.js");
var Statistic = require("../models/statistics.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  Statistic.findOne({ name: "visitorCount" }).exec(function (
    err,
    curStatistic
  ) {
    if (err || curStatistic == null) {
      const newStatistic = new Statistic({ name: "visitorCount", content: 1 });
      newStatistic.save();
    } else {
      curStatistic.content++;
      curStatistic.save();
    }
  });
  res.render("index", { title: "Wanna Go First?" });
});

router.post("/suggest", function (req, res) {
  const newSuggestion = new Suggestion({ content: req.body.suggestion });
  newSuggestion.save().then(function (curSuggestion, err) {
    res.send({ res: "Success" });
  });
});

module.exports = router;
