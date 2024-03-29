const express = require("express")
const router = express.Router()
const Personschema=require('../models/Person')




router.get('/', async (req, res) => {
    try {
        let detail = await Personschema.find()
        res.json(detail).status(200)
    }
    catch (err) {
        console.log(err)
    }

})


router.get('/:worktype',async (req,res)=>{
    try{
     const worktype=req.params.worktype
     if(worktype=='chef' || worktype=='waiter' || worktype=='manager')
     {
         const data=await Personschema.find({work:worktype})
         res.status(200).json(data)
     }
     else{
         res.status(400).send("Invalid input")
     }
    }
    catch(err){
     console.log(err)
    }
     
 })



 router.post('/',async (req,res)=>{
    try{
        const data=req.body
        const details=new Personschema(data)
        const saveddata=await details.save()
        res.status(200).json(saveddata)
    }   
    catch(err){
        console.log(err)
    }
 })


 module.exports=router

