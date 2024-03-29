const mongoose=require("mongoose")
require('dotenv').config();


let URL=process.env.URL_LOCAL
mongoose.connect(URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)



const db=mongoose.connection;
db.on('connected',()=>{
    console.log("database is connected")
})

db.on('disconnected',()=>{
    console.log("disconnected")
})

db.on('error',()=>{
    console.log("error in db connection")
})

module.exports=db;