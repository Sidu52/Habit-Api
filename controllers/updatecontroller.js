const habit= require('../modules/habit');


exports.updatehabbit = async (req, res) => {
    try {
      const userHabit = await habit.findById(req.query.id);
      let temp="";
      for (let userday in userHabit.days) {
        if (userday === req.query.day) {
          if (userHabit.days[userday] === 'notdone') {
            userHabit.days[userday] = 'none';
            temp=userHabit.days[userday];
          } else if (userHabit.days[userday] === 'done') {
            userHabit.days[userday] = 'notdone';
            temp=userHabit.days[userday];
          } else {
            userHabit.days[userday] = 'done';
            
            temp=userHabit.days[userday];
          }
        }
      }
      await userHabit.save();
      res.status(200).send(temp);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };


  module.exports.selectday = async (req,res)=>{
    try{
      let users= await habit.find( {day: req.query.day}).sort("-createdAt");
      res.status(200).send(users);
    }catch(err){
      res.status(500).send('Error fetching user data');
    }
  };

  module.exports.delete= async (req,res)=>{
    try{
      let users= await habit.findByIdAndDelete(req.query.id);
      
      res.status(200).send(users.id);
    }catch(err){
      res.status(500).send('Error fetching user data');
    }
  }




















// module.exports.updatehabbit= async (req,res)=>{
//     try{
//         let user=await habit.findById(req.query.id);
//         var newHabit = user;
//         let day = req.query.day;
//         let val = req.query.val;
        
//         for (let userhabit in newHabit.days) {
//             if (userhabit == day) {
//                 if (val == "notdone") {
//                     newHabit.days[day] = "none"; 
//                     newHabit.streak++
//                 } else if (val == "done") {
//                     newHabit.days[day] = "notdone";
//                     newHabit.streak--;
//                 } else {
//                     newHabit.days[day] = "done";
//                 }
//             }
//         }
        
//         let s = await habit.findByIdAndUpdate(req.query.id, newHabit);
//         return res.redirect('back');
//     }catch(err){
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }