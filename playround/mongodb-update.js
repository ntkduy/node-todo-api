// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log(`Unable to connect to Mongodb server`);
  }
  console.log(`Connected to the server`);

  const db = client.db('TodoApp')

  // findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b0ab54b08d72931604990fa')
  }, {
    $set: {
      name: 'Mary NGUYEN'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //

  client.close();
});
