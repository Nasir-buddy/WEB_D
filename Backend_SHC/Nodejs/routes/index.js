var express = require('express');
var router = express.Router();
const userModel = require('./users');
/* GET home page. */
router.get('/', (req, res)=>{
    // req.session.ban = true;
    res.cookie("age", 45);
    res.render("index");
});
router.get('/read', (req, res)=>{
  console.log(req.cookies.age);
  res.send("check");
});
router.get('/delete', (req, res)=>{
  res.clearCookie("age");
  // console.log(req.cookies.age);
  res.send("clear hogayi");
});
// router.get('/checkban', (req, res)=>{
//   if(req.session.ban === true){
//     res.send("you are banned");
//   } else {
//     res.send("ban removed");
//   }

// })

// router.get('/removeban', (req, res)=>{
//   req.session.destroy((err)=>{
//     if(err) throw err;
//     res.send("ban removed");
//   })
// })
// router.get('/create', async (req, res)=>{
//   const creteUser = await userModel.create({
//     username: "Nasir Ali",
//     age: "23",
//     name: "Nasir"
//   });
//   res.send(creteUser);
// });

// router.get('/alluser', async (req, res)=>{
//   let alluser = await userModel.find();
//   console.log(alluser)
//   res.send(alluser);
// });

// router.get('/delete', async(req, res)=>{
//   let deleteUser = await userModel.findOneAndDelete({
//     username: "Nasir Ali"
//   });
//   res.send(deleteUser); 
// });

module.exports = router;