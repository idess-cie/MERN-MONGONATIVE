const express = require('express')
const routerProfile = require('./routes/profileRouter')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5050

app.use(cors());
app.use(express.json());
app.use("/listProfile", routerProfile);

app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
});
