const mongoose = require('mongoose');

const habit = new mongoose.Schema({
    habit: {
        type: String,
        required: true
    },
    day:{
        type:String
    },
    days:{
        one:{
            type:String,
            default:"none"
        },
        two:{
            type:String,
            default:"none"
        },
        three:{
            type:String,
            default:"none"
        },
        four:{
            type:String,
            default:"none"
        },
        five:{
            type:String,
            default:"none"
        },
        six:{
            type:String,
            default:"none"
        },
        seven:{
            type:String,
            default:"none"
        }
},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

const Habit = mongoose.model('habit', habit);
module.exports = Habit;