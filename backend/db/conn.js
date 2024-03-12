const { MongoClient } = require('mongodb');

const Db = 'mongodb+srv://mariamedina:mcm_030102@test.avqcs9x.mongodb.net/?retryWrites=true&w=majority&appName=Test';

const client = new MongoClient(Db);

var _db;
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      //console.log(db);
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("student-profile");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
  getotherDB: async function (Db) {

    return new Promise((callback) => {
      client.connect((err) => {
        if (err) {
          console.error('Error connecting to MongoDB:', err);
          return;
        }
        console.log('Connected to MongoDB');
      
        // If connection successful, close the client
        client.close();
      });
    });
  }
};
