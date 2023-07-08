const mongoose = require('mongoose')

const SignTemplate = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },

    Password:{
        type:String,
        required:true
    },
    
    Date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('PathToProTable', SignTemplate)