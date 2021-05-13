const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes/routes.js') 
const cors = require('cors')

mongoose.connect(
  'mongodb+srv://chelseaharris137:%26u_cAn_daNc333_1983%26@cluster0.kc5za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

app.use(cors()) 
app.use(express.json()) 
app.use(routes) 
app.use('/build', express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
})


app.listen(3000, () => console.log('running on port 3000'))
