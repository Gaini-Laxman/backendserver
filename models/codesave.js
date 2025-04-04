const mongoose=require('mongoose')

const codesaveSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    code:{
        type:String,
    },
    codeid:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        required:true,
    },
    filename:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    }
})

const codeModel=new mongoose.model('code',codesaveSchema)
module.exports={codeModel}