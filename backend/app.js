const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const db = require('./db/conn')

const app = express()


const PORT = process.env.PORT || 5050

app.get('/', (req, res) => res.end('Hello from Server!'))

app.listen(PORT, () => {
  db.connectToServer(function (err) {
    if (err) console.error(err);
    else {
        console.log(`Server is running on port: ${PORT}`);
    }
});
})