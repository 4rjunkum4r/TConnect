const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      degree: req.body.degree,
      registrationNumber: req.body.registrationNumber,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch(err => {console.log(err);res.json({error: 'Please enter a unique value for email'})})
  }
);

module.exports = router;
