const express = require("express");
const db = require("./db/conn");

const app = express();

const PORT = process.env.PORT || 5050;

// middleware
app.use(express.json())


// route
const ProfileRoutes = require('./router/profileRoutes')
app.use('/api/profile', ProfileRoutes)



app.listen(PORT, () => {
  db.connectToMongoDB(function (err) {
    if (err) console.error(err);
    else {
      console.log(`Server is running on port: ${PORT}`);
    }
  });
});
