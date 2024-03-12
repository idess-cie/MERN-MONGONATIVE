import { MongoClient } from "mongodb";
const Db = process.env.ATLAS_URI;
const app_env = process.env.REACT_APP_ENV;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;
function errorConnectToServer (callback) {
  client.connect(function (err, db) {
    //console.log(db);
    // Verify we got a good "db" object
    if (db) {
       _db = db.db("MERN-Training"); 
    }
    else{
      errorConnectToServer(callback)
    }
    return callback(err);
  });
}
export function connectToServer(callback) {
  client.connect(function (err, db) {
    //console.log(db);
    // Verify we got a good "db" object
    if (db) {
      _db = db.db("student-profile");
    }
    return callback(err);
  });
}
export function getDb() {
  return _db;
}
export async function getotherDB(db_name) {

  return new Promise((callback) => {
    client.connect(function (err, db) {
      //console.log(db);
      // Verify we got a good "db" object
      if (db) {
        var other_db = db.db(db_name);
        callback(other_db);
      }
      callback(false);
    });
  });
}