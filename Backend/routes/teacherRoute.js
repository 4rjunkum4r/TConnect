const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");
const teacherData = require("../middleware/teacherData");
const JWT_SECRET_Teacher = "ProtectionofTeacher";

//Router-1
router.post(
  //Setting a router path
  "/createTeacher",
  [
    //Validating a schema through Express-Validator
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("specialization", "Enter a valid Specialization Name").isLength({
      min: 3,
    }),
    body("teacherId", "Enter a valid Teacher ID").isLength({
      min: 5,
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
      let teacherEmail = await Teacher.findOne({ email: req.body.email });
      let teacherId = await Teacher.findOne({
        teacherId: req.body.teacherId,
      });
      if (teacherEmail) {
        return res.status(400).json({
          error: "Sorry this Email is already register on our portal",
        });
      }
      // If email exists
      if (teacherId) {
        return res.status(400).json({
          error: "Sorry this ID is already register on our portal",
        });
      }
      //If registration number exists

      //Here we are ensuring password must be hidden and protected so using salting and hashing fuctions
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //creating new student if no student exist before
      teacher = await Teacher.create({
        name: req.body.name,
        specialization: req.body.specialization,
        teacherId: req.body.teacherId,
        email: req.body.email,
        password: secPass,
      });
      //we are given teacher a authenticating token rather than a teachers' credentials

      const data = {
        teacher: {
          is: Teacher.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET_Teacher);
      res.json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
// Route-4
router.post(
  //Setting a router path
  "/teacherLogin",
  [
    //Validating a schema through Express-Validator
    body("teacherId", "Please enter a valid ID").isLength({ min: 6 }),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //If there are errors, return BAD request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { teacherId, password } = req.body;
    try {
      let teacher = await Teacher.findOne({ teacherId });
      if (!teacher) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      //Comparing Password via bcrypt

      const passwordCompare = await bcrypt.compare(password, teacher.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const data = {
        teacher: {
          is: Teacher.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET_Teacher);
      res.json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
// Route-6: Get loggedIn teachers details using :POST " /api/auth/getTeacherData". Login requires
router.post(
  //Setting a router path or end points
  "/teacherData",
  teacherData, // fetching the student data as acting as middleware
  async (req, res) => {
    try {
      teacherId = req.teacher.id;
      const teacher = await Teacher.findById(teacherId).select("-password");
      res.send(teacher);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;