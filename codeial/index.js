const express = require('express');
const app = express();
const port = 8000;

// importing the express layouts in the project
const expressLayouts = require('express-ejs-layouts');

app.use(express.static(__dirname + '/assets'));

app.use(expressLayouts);

// use express router
app.use('/', require('./routes'));

//set up the view engine 
app.set('view engine', 'ejs');
app.set('views', './views');

// resuming learning
app.listen(port, (err)=>{     
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running successfully on port: ${port}`);
})
