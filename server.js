const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()
const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database connected successfully')
}).catch(err => {
  console.log('Could not connect to the database', err)
  process.exit()
})

app.get('/', (req, res) => {
  res.json({"message": "Hello Crud Node Express"});
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

