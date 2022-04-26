//Calling and asssging the javascript component
const express = require("express");
const Student = require("../models/Student");
const fetchStudentData = require("../middleware/fetchStudentData");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ProtectionofData";

//Create a user using: POST "/api/auth/createStudent". NO authentication requires sinnce it is a new student registering here

// Route-1
router.post(
  //Setting a router path
  "/createStudent",
  [
    //Validating a schema through Express-Validator
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("degree", "Enter a valid Degree Name").isLength({ min: 3 }),
    body("registrationNumber", "Enter a valid Registration Number").isLength({
      min: 8,
    }),
    body("email", "Enter a valid Email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],

  //We will do asyncronisation call here

  // req--> Request res --> Response
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } //If the error in isEmpty is found then it will return an error message
    try {
      //checking email and registration is exist or  not since it will be asyncronised therefore await call is used here
      let studentEmail = await Student.findOne({ email: req.body.email });
      let studentRegistrationNumber = await Student.findOne({
        registrationNumber: req.body.registrationNumber,
      });
      if (studentEmail) {
        return res.status(400).json({
          error: "Sorry this Email is already register on our portal",
        });
      }
      // If email exists
      if (studentRegistrationNumber) {
        return res.status(400).json({
          error:
            "Sorry this Registration Number is already register on our portal",
        });
      }
      //If registration number exists

      //Here we are ensuring password must be hidden and protected so using salting and hashing fuctions
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //creating new student if no student exist before
      student = await Student.create({
        name: req.body.name,
        degree: req.body.degree,
        registrationNumber: req.body.registrationNumber,
        email: req.body.email,
        password: secPass,
      });
      //we are given student a authenticating token rather than a student credentials

      const data = {
        student: {
          is: Student.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//Authenticating a student using : POST "/api/auth/login". NO login required

// Route-2
router.post(
  //Setting a router path
  "/login",
  [
    //Validating a schema through Express-Validator
    body(
      "registrationNumber",
      "Please enter a valid Registration Number"
    ).isLength({ min: 8 }),
    body("email", "Please enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //If there are errors, return BAD request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { registrationNumber, password } = req.body;
    try {
      let student = await Student.findOne({ registrationNumber });
      if (!student) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      //Comparing Password via bcrypt

      const passwordCompare = await bcrypt.compare(password, student.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const data = {
        student: {
          is: Student.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
// Route-3: Get loggedIn student details using :POST " /api/auth/getstudent". Login requires

router.post(
  //Setting a router path or end points
  "/getStudentData",
  fetchStudentData, // fetching the student data as acting as middleware
  async (req, res) => {
    try {
      studentId = req.student.id;
      const student = await Student.findById(studentId).select("-password");
      res.status(200).send(student);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
module.exports = router;
