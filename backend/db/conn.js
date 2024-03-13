const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://mariamedina:mcm_030102@test.avqcs9x.mongodb.net/?retryWrites=true&w=majority&appName=Test";

const dbName = "student-profile";

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        console.log("Connected successfully to MongoDB server");

        const db = client.db(dbName);

        // i list lang ang laman ng DB student profile
        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections.map(collection => collection.name));
        //end comment

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } finally {
        await client.close();
    }
}

connectToMongoDB();
