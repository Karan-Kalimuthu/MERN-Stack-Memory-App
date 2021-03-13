const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

//localhost:5000/posts
router.get('/', postController.getPosts);
router.post('/', postController.createPost);

module.exports = router;