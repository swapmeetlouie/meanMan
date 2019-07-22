// Dependencies 
const express = require("express");
const Goal = require("../models/goaldash")
const router = express.Router();

// Splash page 
router.get("", (req, res, next) => {
  Goal.find().then(documents => {
    res.status(200).json({
      message: "Goals fetched successfully!",
      goals: documents
    });
  });
});

// Individual Dashboards
router.get("/:majCom", (req, res, next) => {
    const majCom = req.params.majCom;
    Goal.findOne({majCom: majCom}, (err,goals) => {
      if (err) return next(err);
      console.log(req.params)
      res.json(goals); 
    });
  });

 module.exports = router;
