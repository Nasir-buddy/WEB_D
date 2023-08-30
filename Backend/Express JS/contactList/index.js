const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
//Middle ware 1 
//express.encoded detect which fn to be called .. and it reades the data and analysis it 
// convert the form data into request form body .. 
app.use(express.urlencoded());
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
//     // console.log("Middle ware 2 called");
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

app.get('/', function (req, res) {
    console.log(req.myName);
    return res.render('home',{ 
        title: "My contacts List",
        contact_List: contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice',{
        title: "Let us play where EJS"
    });
})
app.post('/create-contact', (req, res)=>{
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    contactList.push(req.body);
    return res.redirect('/');
});
app.listen(port, function (err) {
    if (err) {
        console.log("Error in server!", err);
    }
    console.log("Server is running successfully on port: ", port);
})