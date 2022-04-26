const express = require("express");
const Students = require("../models/Students");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ProtectionofData";

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
    try {
      let studentEmail = await Students.findOne({ email: req.body.email });
let studentRegistrationNumber = await Students.findOne({registrationNumber: req.body.registrationNumber});
      if (studentEmail) {
        return res.status(400).json({ error: "Sorry this Email is already register on our portal" });
      }
if (studentRegistrationNumber){
  return res.status(400).json({ error: "Sorry this Registration Number is already register on our portal" });
}
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //creating new student
      student = await Students.create({
        name: req.body.name,
        degree: req.body.degree,
        registrationNumber: req.body.registrationNumber,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        student: {
          id: Students.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

module.exports = router;
