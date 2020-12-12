const adminRouter = require('express').Router();
const authentication = require("../middleware/authentication")


adminRouter.post("/login",(req,res)=>{
    const { username, password } = req.body
    const token = authentication.generateAccessToken(username)
    res.status(200).send({ "message": "successful login!" ,token})
})


adminRouter.post("/logout",(req,res)=>{
 res.send('logout successful');
})






module.exports = adminRouter;
