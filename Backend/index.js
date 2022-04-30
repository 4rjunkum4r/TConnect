const connectToMongo = require("./db");
const express = require("express");
var cors =require('cors')

connectToMongo();
const app = express();
//Since our react app will use port 3000 so here we are using port 5000
const port = 5000;

//Middleman used here

app.use(cors())
app.use(express.json());

// Available Routes

app.use("/api/student", require("./routes/studentRoute.js"));
app.use("/api/teacher", require("./routes/teacherRoute.js"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
