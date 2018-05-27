const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log(`Unable to connect to Mongodb server`);
  }
  console.log(`Connected to the server`);
  const db = client.db('TodoApp')

  //  Insert new doc into Todos (text, completed)
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Tang NGUYEN',
    age: 31,
    location: "Western Australia"
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert new record', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
