const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes/routes.js') 
const cors = require('cors')

mongoose
    .connect('mongodb+srv://chelseaharris137:3uvHM7zB8w8ZoKFi@cluster0.kc5za.mongodb.net/QuizApp?retryWrites=true&w=majorit', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors()) 
app.use(express.json()) 
app.use(routes) 
app.use('/build', express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, () => console.log('running on port 3000'))

