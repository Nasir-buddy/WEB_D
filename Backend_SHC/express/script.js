const express = require('express');
const app = express();

app.use((req, res, next) => {
    // console.log(req);
    console.log("Middle ware");
    next();
});
app.get('/profile/:username', (req, res) => {
    res.send(`Hello from ${req.params.username}`);
})
app.get('/', (req, res) => {
    res.send('Hello world');
})
app.get('/home', (req, res) => {
    res.send('home section');
})
app.get('/about', (req, res) => {
    res.send('about section');
})

app.listen(8000);