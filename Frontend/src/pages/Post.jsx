import React, { useState, useEffect } from 'react';
import './post.css';

function Post() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);

  const [values, setValues] = useState({
        title: "",
        description: "",
    })

  //get user data in localhost
  const user = JSON.parse(localStorage.getItem('bloggingPlatform-user')); // Get user info from local storage

  //input
  const handleChange = (event) =>{
    setValues({ ...values, [event.target.name]: event.target.value });
  };


  //post button
  const handlePostSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user._id, // Use the user ID from local storage
          title,
          description
        }),
      });
      console.log(response)
      if (response.ok) {
        const newPost = await response.json();
        setPosts((prevPosts) => [...prevPosts, newPost]);
      } else {
        console.error('Error creating post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="post">
      <div className="post-container">

        <div className="user-profile">
          <div className="post-top">
            {/* Display the user's profile image from the user info */}
            <img src={user.profileImage || "../assets/noAvatar.png"} alt="" />
            <div className="profileName">
              <h5>{user.username}</h5>
            </div>
          </div>
        </div>

          <form className='post-form' onClick={handlePostSubmit} >
            <h3>Post</h3>
              <input
                  className='post-title'
                  type='text'
                  placeholder="Title"
                  name="title"
                  onChange={(e) => handleChange(e)}
              />
              <textarea
                  className='post-description'
                  rows="5"
                  cols="40"
                  type='text'
                  placeholder="Description"
                  name="description"
                  onChange={(e) => handleChange(e)}
              />
              <input type="file" className="post-file" name="picture" accept="image/jpeg, image/png"></input>
            <button className="post-button" >POST</button>
          </form>
      </div>
    </div>
  );
}
export default Post;


