var mongodb = require('mongodb');
var fn =require('./myfile.js');
fn();

var otherFn = require('./test').other;
otherFn();

//var uri = 'mongodb://localhost:27017/example';
//mongodb.MongoClient.connect(uri, function (error,db) {
//  if (error) {
//    console.log(error);
//    process.exit(1);
//  }
//  
//  var doc = {
//    title: 'Jaws',
//    year: 1975,
//    director: 'Steven Spielberg',
//    rating: 'PG',
//    ratings: {
//      critics: 80,
//      audience: 97
//    },
//    screenplay: ['Peter Benchley', 'Carl Gotlieb']
//  };
//  
//  
//
//  db.collection('movies').insert(doc, function(error, result) {
//    if (error) {
//      console.log(error);
//      process.exit(1);
//    }
//    
//  var query1 = { year: 1975, rating: 'PG' };
//  var query2 = { screenplay: "Peter Benchley" };
//  var query3 = { 'ratings.audience': { '$gte': 99} };
//    
////  db.collection('movies').find(query1).toArray(function(error, docs){
//  db.collection('movies').find(query3).toArray(function(error, docs){
//    if (error){
//       console.log(error);
//       process.exit(1);
//    }
//
//    console.log('Found docs:');
//    docs.forEach(function(doc) {
//      console.log(JSON.stringify(doc));
//    });
//    process.exit(0);
//    });
//  });
//});