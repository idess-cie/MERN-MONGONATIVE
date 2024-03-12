const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const db = require('./db/conn')

const app = express()


const PORT = process.env.PORT || 5050

app.get('/', (req, res) => res.end('Hello from Server!'))

app.listen(PORT, () => {
  console.log(`Node.js App running on port ${PORT}...`)
})