const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
//Since our react app will use port 3000 so here we are using port 5000
const port = 5000

//Middleman used here

app.use(express.json())

// Available Routes

app.use('/api/studentsAuth', require('./routes/studentsAuth.js'))

app.use('/api/teachersAuth', require('./routes/teachersAuth.js'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})