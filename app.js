const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const Post = require('./models/Post');

const app = express();

//connect Db
mongoose.connect('mongodb://localhost/cleanblog-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//temple engine
app.set("view engine", "ejs");

//middelwares
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//routes
app.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('posts', {
        post
    })
})
app.get('/add', (req, res) => {
    res.render('add')
})
app.post('/posts', async (req, res) => {
    await Post.create(req.body)
    console.log(req.body);

    res.redirect('/');
})
const port = 1001;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
})