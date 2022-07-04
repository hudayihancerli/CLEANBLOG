const Post = require('../models/Post');

exports.getAllPost = async (req, res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
}

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('posts', {
        post
    })
}

exports.createPost = async (req, res) => {
    await Post.create(req.body)
    console.log(req.body);
    res.redirect('/');
}

exports.updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id })
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.dateCreated = Date.now();
    post.save();
    res.redirect(`${req.params.id}`)
}

exports.deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id)
    res.redirect('/')
}