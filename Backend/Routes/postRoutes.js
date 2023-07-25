const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");

// Route to create a new post
router.post("/", postController.createPost);

// Route to delete a post by its ID
router.delete("/:postId", postController.deletePost);

// Route to get a post by its ID
router.get("/:postId", postController.getPost);

module.exports = router;
