const mongoose= require('mongoose');

const user = new  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    token:{
        type:String
    }
},{
    timestamps:true
})

const User= mongoose.model('user',user)
module.exports=User;