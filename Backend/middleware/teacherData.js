const jwt = require("jsonwebtoken");
const JWT_SECRET_Teacher = "ProtectionofTeacher";

const teacherData = (req, res, next) => {
  //get teacher from jwt token and add id to req object

  const token = req.header("teacher-auth-token");
  if (!token) {
    res.status(401).send({ error: "Please use a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET_Teacher);
    req.teacher = data.teacher;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = teacherData;
