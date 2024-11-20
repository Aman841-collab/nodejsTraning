/* ----------nodemon------------*/

//  var http=require('http');
// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('sjin');
// }).listen(8080);
// console.log("aman sainiiuidf");

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
// console.log("34");

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);
// console.log("dsf");


/*-------------Datatype-------------------*/
// const a = {
//     Name: "Aman saini",
//     age : 34,
//     email : "amansaini@gmail.com"
// }  
// console.log(a);

// let age = [33,22,55];
// let age = [34,756,43];
// const result =  age.filter(checkAge);
// function checkAge(age){
//      return age >76;
// }
// console.log("result", result);
 
// var a = {
//     name:"aman saini",
//     age:"54",
//     gender:"male"
// }
// console.log(a.gender);

/*----------- Operator-------------*/
/*---------A+B---------------*/
// let a=32;
// let b=54;
// let c=a+b;
// console.log(c);

/*-----------  for loop---------------*/
// var a=10;
// for( var i=1; i<=a; i++)
// {
//     console.log(i);
// }
// console.log("test");

/*------------cors----------------*/
// const  express = require('express');
//     const cors =require('cors');
//     const app = express();
//     app.use(cors());

    const corsOptions = {
        origin: 'https://www.nileshblog.tech/',
        optionsSuccessStatus: 200,
      };
     
      app.use(cors(corsOptions));

