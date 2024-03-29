const mongoose=require("mongoose")
let Schema=mongoose.Schema

let menuschema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        required:true
    },
    isdrink:{
        type:Boolean,
        default:false
    },
    
    ingredients: {
        type: [String],
        default: [],
    },

    num_sales: {
        type: Number,
        default: 0,
    }
})

const MENU=mongoose.model('MENU',menuschema);
module.exports=MENU