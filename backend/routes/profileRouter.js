
const express  = require('express')

const Db = require('../db/conn')

const { ObjectId } = require('mongodb')

const router = express.Router();

router.get("/test", async (req, res) => {
    try {
      const db = await Db(); // Get the database connection
      console.log("DB Object:", db); // Print out the database connection object
      res.status(200).send("DB Object printed to console");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error occurred while testing");
    }
  });

// // Get
// router.get("/", async (req, res) => {
//   let collection = await Db.collection("profiles");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });

// // Get single
// router.get("/:id", async (req, res) => {
//   let collection = await Db.collection("profiles");
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // Add
// router.post("/", async (req, res) => {
//   try {
//     let newProfile = {
//       name: req.body.name,
//       house: req.body.house,
//       bloodline: req.body.bloodline,
//     };
//     let collection = await Db.collection("profiles");
//     let result = await collection.insertOne(newProfile);
//     res.send(result).status(204);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error adding new profile");
//   }
// });

module.exports = router;