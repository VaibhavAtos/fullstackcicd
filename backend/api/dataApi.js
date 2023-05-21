var express = require('express');
var router = express.Router();

var dotenv = require('dotenv');

dotenv.config();










router.get("/test",(req,res)=>{

    
        res.status(200).json({
           message:"data"
        })
    
});






















module.exports=router;
