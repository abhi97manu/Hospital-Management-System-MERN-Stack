const { response } = require('express')
const mongoose = require('mongoose')
require("dotenv/config");

const connectToDB =  async()=>{
   const response   = await mongoose.connect(process.env.DB_URL)
        if(response)
            console.log("connected To DB")
        else{
            console.log("ERROR while connecting to db");
            
        }

}

module.exports =  connectToDB