const authorsRouter = require('express').Router();
const authorsData = require("../authors.json");
const {authenticateToken}= require('../middleware/authentication')



//getting all authors
authorsRouter.get('/',(req,res)=>{
    console.log(req);
    res.json(authorsData);
});

//get specific author with an id
authorsRouter.get('/:id',(req,res)=>{
    const id= req.params.id;   
    const newAuthorData=  authorsData.filter(author=>author.authorId === id);     
    res.status(200).send(newAuthorData);
 });

 // get all books by a specific author
 authorsRouter.get('/:id/books',(req,res)=>{
    const id= req.params.id;   
    let newAuthorData=  authorsData.filter(author=>author.authorId === id );    
    const authorBooks=newAuthorData[0].books;   
    res.status(200).send({books:authorBooks});
 });

//creating a new book
authorsRouter.post('/',authenticateToken,(req,res) =>{
 const requestBody= req.body;
 authorsData.push(requestBody) 
 res.send({action:"adding a new book", message:"added successfully", body:requestBody});
 
})


//delete a book
authorsRouter.delete('/:id',authenticateToken,(req,res)=>{
   
    const id = req.params.id;   
    const newAuthorsData = authorsData.filter(author=>author.authorId!==id)  
    res.send({mesage:"item removed",newAuthorsData});
})

module.exports = authorsRouter;
