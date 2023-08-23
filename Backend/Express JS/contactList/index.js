const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

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
app.listen(port, function (err) {
    if (err) {
        console.log("Error in server!", err);
    }
    console.log("Server is running successfully on port: ", port);
})