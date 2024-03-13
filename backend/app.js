<<<<<<< Updated upstream
const express = require("express");
const db = require("./db/conn");

const app = express();

const PORT = process.env.PORT || 5050;

// middleware
app.use(express.json())


// route
const ProfileRoutes = require('./router/profileRoutes')
app.use('/api/profile', ProfileRoutes)


=======
const express = require('express')
const routerProfile = require('./routes/profileRouter')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5050

app.use(cors());
app.use(express.json());
app.use("/listProfile", routerProfile);
>>>>>>> Stashed changes

app.listen(PORT, () => {
  db.connectToMongoDB(function (err) {
    if (err) console.error(err);
    else {
      console.log(`Server is running on port: ${PORT}`);
    }
  });
});
