const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");

// Route to create a new post
router.post("/", postController.createPost);

// Route to delete a post by its ID
router.delete("/:postId", postController.deletePost);

// Route to get a post by its ID
router.get("/:postId", postController.getPost);

// update a post by post Id
router.put("/:id", postController.updatePost);

//like, dislike post
router.put("/:id/like", postController, likeAndDislike);

//get a post by post Id
router.get("/:id", postController, getOnePost);

//get all posts
router.get("/api/v1/allPosts", postController, getAllPosts);

//get all of my posts
router.get("/api/v1/allMyPosts", postController, getAllMyPosts);

//get all of my posts in profile page
router.get("/profile/:username", postController, getAllMyPostsProfile);

//get all of following people's posts and my posts
router.get("/timeline/:userId", postController, getMyAndFollowersPosts);


module.exports = router;