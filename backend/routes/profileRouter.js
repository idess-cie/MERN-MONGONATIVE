const express = require('express');
const connectToMongoDB = require('../db/conn');
const { ObjectId } = require('mongodb');

const router = express.Router();

// Get all profiles
router.get("/", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("profiles");
    const results = await collection.find({}).toArray();
    res.send(results).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching profiles");
  }
});

// Get single profile by ID
router.get("/:id", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("profiles");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) res.status(404).send("Profile not found");
    else res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching profile");
  }
});

// Add new profile
router.post("/", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("profiles");
    const newProfile = {
      name: req.body.name,
      house: req.body.house,
      bloodline: req.body.bloodline,
    };
    const result = await collection.insertOne(newProfile);
    res.status(204).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding new profile");
  }
});

// Update
router.patch("/:id", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("profiles"); // Define the collection variable

    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        house: req.body.house,
        bloodline: req.body.bloodline,
      },
    };

    // Correct the call to updateOne
    const result = await collection.updateOne(query, updates);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error in updating profile");
  }
})

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const db = await connectToMongoDB(); // Get the database connection
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("profiles");

    const result = await collection.deleteOne(query);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting profile");
  }
});

module.exports = router;
