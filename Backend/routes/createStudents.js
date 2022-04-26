const express = require("express");
const Students = require("../models/Students");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

//Create a user using: POST "/api/auth/". Doesn't require Auth

router.post(
  "/",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("degree", "Enter a valid Degree Name").isLength({ min: 3 }),
    body("registrationNumber", "Enter a valid Registration Number").isLength({
      min: 8,
    }),
    body("email", "Enter a valid Email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    Students.create({
      name: req.body.name,
      degree: req.body.degree,
      registrationNumber: req.body.registrationNumber,
      email: req.body.email,
      password: secPass,
    })
      .then((Students) => res.json(Students))
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
