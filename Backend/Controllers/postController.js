const PostModel = require("../Models/Post");
const Post = require("../Models/Post");
const User = require("../Models/User");


// Controller to create a new post
const createPost = async (req, res) => {
  try {
    const { userId, title, description } = req.body;
    const newPost = await PostModel.create({ userId, title, description });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Error creating the post" });
  }
};

// //create a new post
// const createPost = async (req, res) => {
//   const newPost = new Post(req.body);
//   try{
//       const savedPost = await newPost.save();
//       res.status(200).json(savedPost);
//   }catch(err){
//       res.status(500).json(err);
//   }
// };


//update a post
const updatePost = async(req, res) => { //id = post id
  try{
      const post = await Post.findById(req.params.id);
      if(post.userId === req.body.userId){
          await post.updateOne( {$set: req.body} );
          return res.status(200).json("The post has been updated")
      }else{
          return res.status(403).json("You can update only your post")
      }
  }catch(err){
      return res.status(500).json(err)
  }
}


// Controller to delete a post by its ID
const deletePost = async (req, res) => {
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

// //delete a post
// const deletePost = async(req, res) => {
//   try{
//       const post = await Post.findById(req.params.id);
//       if(post.userId === req.body.userId){
//           await post.deleteOne( {$set: req.body} );
//           return res.status(200).json("The post has been deleted")
//       }else{
//           return res.status(403).json("You can delete only your post")
//       }
//   }catch(err){
//       return res.status(500).json(err)
//   }
// };


// Controller to get a post by its ID
const getPost = async (req, res) => {
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


//like or dislike a post
const likeAndDislike = async(req, res) => { //id = post id
  try{
      const post = await Post.findById(req.params.id);
      //like
      if(!post.likes.includes(req.body.userId)){
          await post.updateOne({ $push: { likes: req.body.userId } });
          return res.status(200).json("The post has been liked")
      }else{ //dislike
          await post.updateOne({ $pull: { likes: req.body.userId } });
          return res.status(200).json("The post has been disliked")
      }
  }catch(err){
      res.status(500).json(err);
  }
}

//get all posts
const getAllPosts = async(req, res) =>{
  try{
      const allPosts = await Post.find({});
      res.status(200).json(allPosts);
  } catch(err) {
      res.status(500).json(err);
  }
}

//get only all of my posts
const getAllMyPosts =  async(req, res) =>{
  try{
      //get all posts
      const allPosts = await Post.find({});
      //get only my posts
      const myPosts = await Promise.all(
          allPosts.filter((allMyPost) => {
              return allMyPost.userId == req.body.userId
          })
          );
          return res.status(200).json(myPosts);
  } catch(err) {
      return res.status(500).json(err);
  }
}

//get all of my posts(profile page)
const getAllMyPostsProfile = async (req, res) => {
  try{
      const user = await User.findOne({ username:req.params.username }); //1つのユーザー名から探すのでfindOne. findOneはプロパティが必要なのでusername:で指定
      const posts = await Post.find({ userId: user._id });
      return res.status(200).json(posts);
  }catch(err){
      return res.status(500).json(err);
  }
}

//get all of following people's posts and my posts
const getMyAndFollowersPosts = async (req, res) => {
  try{
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      //get all of the friend's posts
      const friendPosts = await Promise.all(
          currentUser.followings.map(friendId => {
          return Post.find({ userId: friendId });
          })
      );
      return res.json(userPosts.concat(...friendPosts)); // combine my posts and friend's posts
  }catch(err){
      return res.status(500).json(err);
  }
}

module.exports = { likeAndDislike, getAllPosts, getAllMyPosts, getAllMyPostsProfile, getMyAndFollowersPosts, createPost, deletePost, getPost, updatePost,};
