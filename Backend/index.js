const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
//Since our react app will use port 3000 so here we are using port 5000
const port = 5000

//Middleman used here

app.use(express.json())

// Available Routes

app.use('/api/auth', require('./routes/students.js'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})