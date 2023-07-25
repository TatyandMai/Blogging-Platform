const PostModel = require("../Models/Post");

// Controller to create a new post
exports.createPost = async (req, res) => {
  try {
    const { userId, title, description } = req.body;
    const newPost = await PostModel.create({ userId, title, description });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Error creating the post" });
  }
};

// Controller to delete a post by its ID
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const deletedPost = await PostModel.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json({ error: "Error deleting the post" });
  }
};

// Controller to get a post by its ID
exports.getPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: "Error getting the post" });
  }
};
