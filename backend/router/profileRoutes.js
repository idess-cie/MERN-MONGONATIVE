const express = require('express');
const { createProfile } = require('../Controllers/profileController');

const router = express.Router();

// Define routes
router.post("/api/profile", createProfile);

module.exports = router;
