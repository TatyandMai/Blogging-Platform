const express = require("express");
const router = express.Router();
// const postController = require("../Controllers/postController");

const {
    createPost,
    deletePost,
    getPost,
    updatePost,
    likeAndDislike,
    getAllPosts,
    getAllMyPosts,
    getAllMyPostsProfile,
    getMyAndFollowersPosts
} = require("../Controllers/postController")

// Route to create a new post
router.post("/", createPost);

// Route to delete a post by its ID
router.delete("/:postId", deletePost);

// Route to get a post by its ID
router.get("/:postId", getPost);

// update a post by post Id
router.put("/:id", updatePost);

//like, dislike post
router.put("/:id/like", likeAndDislike);

//get all posts
router.get("/api/v1/allPosts", getAllPosts);

//get all of my posts
router.get("/api/v1/allMyPosts", getAllMyPosts);

//get all of my posts in profile page
router.get("/profile/:username", getAllMyPostsProfile);

//get all of following people's posts and my posts
router.get("/timeline/:userId", getMyAndFollowersPosts);


module.exports = router;
