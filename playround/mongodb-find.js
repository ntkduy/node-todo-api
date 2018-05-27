// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log(`Unable to connect to Mongodb server`);
  }
  console.log(`Connected to the server`);

  const db = client.db('TodoApp')

  // Find all docs
  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log(`Todos`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch todos`, err);
  // });

  // Find particular field
  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log(`Todos`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch todos`, err);
  // });

  // Find by Object ID
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b0ab148a60a642fcc90b0eb')
  // }).toArray().then((docs) => {
  //   console.log(`Todos`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch todos`, err);
  // });

  // Count element in document
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log(`Unable to fetch todos`, err);
  // });

  // Count element in document with condition
  db.collection('Users').find({name: 'Bao Ngoc'}).count().then((count) => {
    console.log(`There are (is): ${count} user(s)`);
  }, (err) => {
    console.log(`Unable to fetch todos`, err);
  });


  client.close();
});
