// const profileSchema  = require('../Model/profileModel')
// const { ObjectId } = require('mongodb')

// // Add
// const addProfile = async (req, res) => {
//     const { name, house, bloodline } = req.body;
  
//     // Add to db
//     try {
//       const profile = await profile.create({ name, house, bloodline });
//       res.status(200).json(profile);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };

//   module.exports = {
//     addProfile,
//   };

const { insertProfile } = require('../Model/profileModel');

async function createProfile(req, res) {
    var response = {
        remarks: "error",
        message: "",
        payload: []
    };

    const payload = req.body.payload;

    if (!payload.name || !payload.house || !payload.bloodline) {
        response.message = "Incomplete Data Sent";
        res.status(400).json(response);
        return;
    }

    let myObject = {
        name: payload.name,
        house: payload.house,
        bloodline: payload.bloodline
    };

    try {
        const insertedProfile = await insertProfile(myObject);
        response.remarks = "Success";
        response.message = "Profile successfully created";
        response.payload = insertedProfile;
        res.json(response);
    } catch (error) {
        console.error('Error creating profile:', error);
        response.message = "Something went wrong";
        res.status(500).json(response);
    }
}

module.exports = {
    createProfile
};
