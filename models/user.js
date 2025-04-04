const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true,
        unique:true
    },email:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true
    }
})

const userModel=new mongoose.model('user',userSchema)
module.exports={userModel}
