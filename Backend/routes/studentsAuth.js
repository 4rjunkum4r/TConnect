const express = require("express");
const Students = require("../models/Students");
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
  async (req, res) => {
    //If there's any errors, return "BAD REQUEST" and "ERRORS"
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// Checking whether the any value matches to current input
    let Students = Students.findOne({registrationNumber: req.body.registrationNumber},{email: req.body.email});
    if (Students){
      return req.status(400).json({error:"Sorry a student with this registration number or email already exits"})
    }
    
    Students = await Students.create({
      name: req.body.name,
      degree: req.body.degree,
      registrationNumber: req.body.registrationNumber,
      email: req.body.email,
      password: req.body.password,
    })

  }
);

module.exports = router;
