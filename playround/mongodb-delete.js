// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log(`Unable to connect to Mongodb server`);
  }
  console.log(`Connected to the server`);

  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // deletOne
  // db.collection('Todos').deletOne({
  //   text: 'Eat Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // deleteDuplicateUsers
  db.collection('Users').deleteMany({
    name: 'Tang NGUYEN'
  })




  client.close();
});
