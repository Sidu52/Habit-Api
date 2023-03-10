const User = require('../modules/user');
const Habitschema = require('../modules/habit');
const crypto = require('crypto');
module.exports.createuser = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            const generateToken = () => {
                return crypto.randomBytes(48).toString('hex');
            }
            let token = generateToken();
            User.create({
                username: req.body.username,
                email: req.body.email,
                token: token
            });
            return res.redirect(`/home/${token}`);
        }
        return res.redirect(`/home/${user.token}`);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports.loginuser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.redirect(`/home/${user.token}`);
        } return res.redirect('/singup');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

//Addhabit in DB.
module.exports.addhabit = async (req, res) => {
    let habitfind = await Habitschema.findById(req.params.id); {
        if (!habitfind) {
            const user = await User.findById(req.params.id);
            const Habit = await Habitschema.findOne({ habit: req.body.habit });
            if (!Habit) {
                const today = new Date(); // Get the current date
                const currentDay = today.getDay(); // Get the current day of the week (0-6, with 0 representing Sunday)
                const arr = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
                let days = {
                    one: "none",
                    two: "none",
                    three: "none",
                    four: "none",
                    five: "none",
                    six: "none",
                    seven: "none",
                }
                Habitschema.create({
                    habit: req.body.habit,
                    day: arr[currentDay],
                    days: days,
                    user: user
                })
            }
            return res.redirect('back');
        }
    }
    habitfind.status = req.body.status;
    await habitfind.save();
    return res.redirect('back');
}

module.exports.delete = async (req, res) => {
    try {
        const habit = await Habitschema.findByIdAndDelete(req.params.id)
        return res.redirect('back')
    } catch (err) {
        console.log(err)
        return res.redirect('back')
    }

}