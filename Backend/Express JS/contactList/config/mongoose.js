//require the library
const mongoose = require('mongoose');


// connect to the database
mongoose.connect('mongodb://localhost/contact_list_db');

// aquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('erroe', console.error.bind(console, 'error connecting to db'));

//up an running then print the message
db.once('open', ()=>{
    console.log('Successfully connected to the database');
});