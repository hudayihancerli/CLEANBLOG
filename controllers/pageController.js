const Post = require('../models/Post');


exports.postPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render('edit', {
        post
    })
}

exports.addPage = (req, res) => {
    res.render('add')
}

exports.aboutPage = (req, res) => {
    res.render('about')
}