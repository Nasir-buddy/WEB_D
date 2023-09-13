const express = require('express');
const path = require('path');
const port = 8000;


const db = require('./config/mongoose');
const Contact = require('./models/contact');
const { kMaxLength } = require('buffer');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Middle ware 1 
//express.encoded detect which fn to be called .. and it reades the data and analysis it 
// convert the form data into request form body .. 
// we doing extended true because in url passing many type of thing not only string 

app.use(express.urlencoded({ extended: true }));
// we using express.json to calling the function of json 
app.use(express.json());
// middleware static
app.use(express.static('assets'));


// app.use((req, res,next)=>{
//     req.myName = "Nasir";
//     // console.log('middleware 1 called');
//     next();
// });

// //middle ware 2
// app.use((req , res, next)=>{
//     console.log("My name from M2", req.myName);
//     // console.log("Middle ware 2 scalled");
//     next();
// })

var contactList = [
    {
        name: "Nasir Ali",
        phone: "9876543210"
    },
    {
        name: "Aakash Sharma",
        phone: "1234567890"
    },
    {
        name: "Archil Sachan",
        phone: "5678912345"
    }
];

app.get('/', async function (req, res) {
    try {
        const data = await Contact.find({
            
        });
        return res.render('home',{
            title: "Contact List",
            contact_List: data
        })
    } catch (error) {
        console.log("Error in creating contact.", error);
        return;
    }
});

app.get('/practice', function (req, res) {
    return res.render('practice', {
        title: "Let us play where EJS"
    });
});

// Thanks Anurag Chauhan to helping to fix this issue 
app.post('/create-contact', async (req, res) => {
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    // contactList.push(req.body);
    // return res.redirect('/');
    try {
        const result = await Contact.create({
            name: req.body.name,
            phone: req.body.phone
        });
        // console.log(result);
        return res.redirect('/');
    } catch (error) {
        console.log("Cannot push the contact,", error);
        return res.redirect('/');
    }

});

app.get('/delete-contact/',async function (req, res) {
    // console.log(req.query);
    // get the if from query in the ul
    let id = req.query.id;
    try {
        await Contact.findByIdAndDelete(id);
        return res.redirect('back');
    } catch (error) {
        console.log("Error in deleting an object from database");
        return;
    }
});

app.listen(port, function (err) {
    if (err) {
        console.log("Error in server!", err);
    }
    console.log("Server is running successfully on port: ", port);
})
// steps
// 1.st index.js
// npm init
// npm install express
//  server starting 
//  from nodemon
// npm install ejs
///  use ejs as a view engine
//   path of views
//   created a file named home.ejs
// form + post req
// static files
//  created assest from assests
//  we created assests folder
//  and home css js 