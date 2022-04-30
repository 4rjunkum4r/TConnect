const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher");
router.get(
  //Setting a router path or end points
  "/teacherData",
  async (req, res) => {
    try {

      res.status(200).json({ Teacher });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
module.exports = router;