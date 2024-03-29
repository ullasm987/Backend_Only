const express=require("express")
const app=express()
const db=require('./Db')
require('dotenv').config();
const bodyparser=require('body-parser')

app.use(bodyparser.json());




const personrouter=require("./routes/Router")
const menurouter=require("./routes/menurouter")
app.use('/',personrouter);
app.use('/person',personrouter);
app.use('/menu',menurouter)



let port=process.env.PORT || 5000

app.listen(`${port}`,()=>{
    console.log("node js server running")
}
)