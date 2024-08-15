const mongoose=require("mongoose");
const Student= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll_no:{
        type:Number,
        required:true

    },
    branch:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    isCurrentStudent:{
        type:Boolean,
        required:true,
        default:true
    }
    
})

module.exports=mongoose.model('Student',Student)