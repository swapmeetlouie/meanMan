// Dependencies 
const express = require("express");
const Post = require("../models/majdash");
const router = express.Router();

// Splash page 
router.get("", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

// Individual Dashboards
router.get("/:majCom", (req, res, next) => {
  const majCom = req.params.majCom;
  Post.findOne({majCom: majCom}, (err,post) => {
    if (err) return next(err);
    console.log(req.params)
    res.json(post); 
  });
});

module.exports = router;
