const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Personschema=new Schema({
    name:{
        type:String,
        required:true
    },

    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },

    age:{
        type:Number
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

})
const Person=mongoose.model('Person',Personschema);
module.exports=Person;
