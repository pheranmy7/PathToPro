const mongoose = require('mongoose')

const UpdateTemplate = new mongoose.Schema({
    Surname:{
        type:String,
        required:true
    },

    OtherName:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    },

    Username:{
        type:String,
        required:true
    },

    Password:{
        type:String,
        required:true
    },
    
    ConfirmPassword:{
        type:String,
        required:true
    },
    
    Date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('PathToProTable', UpdateTemplate)