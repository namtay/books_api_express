const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port=3000;
const testData = require("./books.json");
const authorData= require("./authors.json");
const authorsRouter= require("./controllers/authors");
const booksRouter = require("./controllers/books");
const adminRouter = require ("./controllers/admin")
const { response } = require('express');
const fs =require('fs');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




//getting books based on a rating
// app.get('/books/:rating',(req,res)=>{
//     const rating= req.params.rating;

//     const newTestData = new Array();
//        for (let i=0 ;i<testData.length;i++){
//            if(testData[i].rating==rating){
//                newTestData.push(testData[i])               
//            }
//        }
//    // res.json(newTestData);
//     res.status(200).send(newTestData);
// });


app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/admin",adminRouter);

app.listen(port,()=>{
    console.log("My app is running on this server")
})


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//     res.send('hello world')
//   })

// or...in an anonymous function format

// app.get('/',(request,response)=>{
//     res.send("Hello World")
// })