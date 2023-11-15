var express = require('express');
var router = express.Router();

const userModel = require('./users');
const { render, route } = require('../app');
const passport = require('passport');
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));



/* GET home page. */
router.get('/', (req, res)=>{
  res.render('index');
})
router.get('/profile', isLoggedIn,function (req, res) {
  res.render('profile');
});

// router.get('/failed', function(req, res) {
//   // flash msg aapko allow krte hai nki aap is orute me bane hue data do dushre route me use kr skte hain 
//   req.flash('age', 12);
//   req.flash('name', "Nasir Ali");
//   res.send("ho gya bn gya");
// });

// router.get('/check', function(req, res) {
//   console.log(req.flash('age'), req.flash('name'));
//   res.send('check kr lo bck ke terminal par')
//   });

// Mongoose question
// router.get("/create", async (req, res) => {
//   let userData = await userModel.create({
//     username: "Monu",
//     nickname: "Sim ",
//     description: 'I am Samreen  and i love drawing',
//     categories: {
//       type: Array,
//       default: ['math pro']
//     }
//   })
//   res.send(userData);
// });

// router.get('/find', async(req, res)=>{
  // new RedExp(search , flag)
  // var regex = new RegExp('^NaSiR$', 'i')
  // let user = await userModel.find({username: regex});
  // console.log(res);
  // var regex = new RegExp("^samreen$", 'i')
  // let user = await userModel.find({categories: { $all :
  //    ["drawing", "node"]}});

  // var date2 = new Date('2023-11-02')
  // var date1 = new Date('2023-11-15')
//   let user = await userModel.find({
//     $expr: {
//       $and: [
//         {$gte: [{$strLenCP: '$nickname'}, 0]},
//         {$lte: [{$strLenCP: '$nickname'}, 6]}
//       ]
//     }
//   });
//   console.log(user);
//   res.send(user);
// })
router.post('/register', (req, res)=>{
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  })

  userModel.register(userdata, req.body.password)
  .then(function(registereduser){
    passport.authenticate("local")(req, res, function(){
      res.redirect('/profile');
    })
  })
});

router.post("/login", passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req, res){})

router.get("/logout", (req, res, next)=>{
  req.logOut(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
})

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } 
  res.redirect("/");
}
module.exports = router;
