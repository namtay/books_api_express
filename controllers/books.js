

const booksRouter = require('express').Router();
const testData = require("../books.json");
const { authenticateToken } = require('../middleware/authentication');




booksRouter.get("/",(req,res)=>{
    res.send("This is the main mest backend");
})

//getting all books
booksRouter.get('/get/',(req,res)=>{
    console.log(req);
    const testData = require("./books.json");
    res.json(testData);
});


booksRouter.get('/:rating',(req,res)=>{
    const rating= req.params.rating;     
    console.log(req.params)
    const newTestData=  testData.filter(book=>book.rating == rating);     
    res.status(200).send(newTestData);
 });


//creating a new book
booksRouter.post('/',authenticateToken,(req,res) =>{
 const requestBody= req.body;
 console.log(requestBody);   
 res.send({action:"adding a new book", message:"added successfully", body:requestBody});
 const dataUpdate= JSON.stringify(requestBody)
 fs.writeFile('trial.js',dataUpdate,(err=>{
     if (err){
         throw err;
     }
     console.log("JSON data is saved.")
 }))
})


//delete a book
booksRouter.delete('/:bookId',authenticateToken,(req,res)=>{
    console.log(req);
    const id = req.params.bookId;  
    const newData = testData[id];
    console.log(newData)   
    const newTestData = testData.splice(id,1);  
    res.send({mesage:"item removed",newTestData});
})




module.exports = booksRouter;
