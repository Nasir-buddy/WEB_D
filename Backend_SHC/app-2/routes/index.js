var express = require('express');
var router = express.Router();

const userModel = require('./users');
const { render } = require('../app');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
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
router.get("/create", async (req, res) => {
  let userData = await userModel.create({
    username: "Monu",
    nickname: "Sim ",
    description: 'I am Samreen  and i love drawing',
    categories: {
      type: Array,
      default: ['math pro']
    }
  })
  res.send(userData);
});

router.get('/find', async(req, res)=>{
  // new RedExp(search , flag)
  // var regex = new RegExp('^NaSiR$', 'i')
  // let user = await userModel.find({username: regex});
  // console.log(res);
  // var regex = new RegExp("^samreen$", 'i')
  // let user = await userModel.find({categories: { $all :
  //    ["drawing", "node"]}});

  var date2 = new Date('2023-11-02')
  var date1 = new Date('2023-11-15')
  let user = await userModel.find({ datecreated: {$gte: date1 , $lte: date2}});
  console.log(user);
  res.send(user);
})

module.exports = router;
