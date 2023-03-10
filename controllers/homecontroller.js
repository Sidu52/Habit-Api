const User = require('../modules/user');
const Habitschema = require('../modules/habit');
module.exports.login= (req,res)=>{
    res.render("login",{
        title:"Home-page"
    })
}

module.exports.singup= (req,res)=>{
    res.render("singup",{
        title:"SingUp"
    })
}

module.exports.home=async (req,res)=>{
    const user =await User.findOne({token:req.params.token});
    const Habit = await Habitschema.find({user:user.id}).sort("-createdAt")
    if(user){
        return res.render("home",{
            title:"Home-page",
            user:user,
            users_habit:Habit

        })
    }
    return res.redirect('/');
}