const { connectToMongoDB } = require('../db/conn');

const collectionName = 'profiles';

const profileSchema = {
  "name": {
    type: String,
    required: true
  },
  "house": {
    type: String,
    required: true
  },
  "bloodline": {
    type: String,
    required: true
  },
  "isArchived": {
    type: Boolean,
    default: false
  }
};

async function insertProfile(profile) {
    const db = await connectToMongoDB();

    try {
        const result = await db.collection(collectionName).insertOne(profile);
        console.log('User inserted successfully:', result.ops[0]);
        return result.ops[0];
      } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
      } finally {
        await db.client.close();
      }
}

module.exports = {
  profileSchema, 
  insertProfile
};