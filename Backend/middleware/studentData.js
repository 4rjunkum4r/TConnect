const jwt = require("jsonwebtoken");
const JWT_SECRET_Student = "ProtectionofStudent";

const studentData = (req, res, next) => {
  //get student from jwt token and add id to req object

  const token = req.header("student-auth-token");
  if (!token) {
    res.status(401).send({ error: "Please use a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET_Student);
    req.student = data.student;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = studentData;