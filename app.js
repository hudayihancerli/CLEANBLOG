const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const ejs = require('ejs');
const Post = require('./models/Post');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');


const app = express();

//connect Db
mongoose.connect('mongodb+srv://hudayihancerli:Mahmyut.2746@cluster0.ueyqybo.mongodb.net/blog-app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Db connected.');
}).catch((err) => {
    console.log(err);
})

//temple engine
app.set("view engine", "ejs");

//middelwares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}))


//routes
app.get('/', postController.getAllPost)
app.get('/posts/:id', postController.getPost)
app.post('/posts', postController.createPost)
app.put('/posts/:id', postController.updatePost)
app.delete('/posts/:id', postController.deletePost);

app.get('/about', pageController.aboutPage)
app.get('/add', pageController.addPage)
app.get('/posts/edit/:id', pageController.postPage)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
})