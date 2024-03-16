const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://mariamedina:mcm_030102@test.avqcs9x.mongodb.net/?retryWrites=true&w=majority&appName=Test";

const dbName = "student-profile";

const client = new MongoClient(uri);

async function connectToMongoDB() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
module.exports = connectToMongoDB;
