const express = require('express');
const router = express.Router();
// Import the Post Model
const Post = require('../models/Post');
/**
 * Gets back all the posts
 */
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
});
/**
 * Creates a Post
 */
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });
    }
});
/**
 * Find a specific Post
 */
router.get('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
});
/**
 * Update a Single Post
 */
router.patch('/:id', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.id }, { $set: { title: req.body.title } });
        res.json(updatedPost);
    } catch (error) {
        res.json({ message: error });
    }
});


/**
 * Delete a specific Post
 */

router.delete('/:id', async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.id });
        res.json(removedPost);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;