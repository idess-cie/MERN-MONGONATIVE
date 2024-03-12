const express = require('express')
const mongodb = require('mongodb')

const app = express()


const PORT = process.env.PORT || 5050

app.get('/testRoute', (req, res) => res.end('Hello from Server!'))

app.listen(PORT, () => {
  console.log(`Node.js App running on port ${PORT}...`)
})