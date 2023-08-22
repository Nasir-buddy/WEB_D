const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.get('/', function (req, res) {
    // console.log(req);
    return res.render('index',{title: "My contacts List"});
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