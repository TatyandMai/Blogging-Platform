import React, { useState, useEffect } from 'react';
import './post.css';

function Post() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem('bloggingPlatform-user')); // Get user info from local storage

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user._id, // Use the user ID from local storage
          title,
          description,
        }),
      });

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

  // ...

  return (
    <div className="post">
      <div className="container">
        {/* ... */}
        <div className="user-profile">
          {/* Display the user's profile image from the user info */}
          <img src={user.profileImage} alt="User Profile" />
        </div>
        <div className="post-box">
          {/* ... */}
          <button className="post-button" onClick={handlePostSubmit}>
            POST
          </button>
        </div>
        <div className="comments-section">
          {/* Display all posts */}
          {posts.map((post) => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
