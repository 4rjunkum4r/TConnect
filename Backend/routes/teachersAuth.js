const express = require("express");
const Teachers = require("../models/Teacher");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("specialization", "Enter a valid Specialization").isLength({ min: 3 }),
    body("teacherID", "Enter a valid Teacher ID").isLength({
      min: 5,
    }),
    body("email", "Enter a valid Email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    Teachers.create({
      name: req.body.name,
      specialization: req.body.specialization,
      teacherID: req.body.teacherID,
      email: req.body.email,
      password: req.body.password,
    })
      .then((Teachers) => res.json(Teachers))
      .catch((err) => {
        console.log(err);
        res.json({
          error: "Please enter a unique value",
          message: err.message,
        });
      });
  }
);

module.exports = router;
