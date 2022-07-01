const express = require('express');
const path = require('path');
const ejs = require('ejs');


const app = express();

//temple engine
app.set("view engine", "ejs");

//middelwares
app.use(express.static('public'));


//routes
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/add', (req, res) => {
    res.render('add')
})

const port = 1001;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
})