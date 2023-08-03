import React from 'react';
import './post.css';
function Post() {
  return (
    <div className="post">
      <div className="container">
        <div className="user-profile">
          {/* Here you can put the image of the user */}
          <img src="person 9.png" alt="User Profile" />
        </div>
        <div className="post-box">
          <input type="text" placeholder="Post title" />
          <textarea placeholder="Write your post here"></textarea>
          <div className="upload-buttons">
            <label htmlFor="photo-upload">Add photo</label>
            <input type="file" id="photo-upload" accept="image/*" />
            <label htmlFor="video-upload">Add video</label>
            <input type="file" id="video-upload" accept="video/*" />
          </div>
          <button className="post-button">POST</button>
        </div>
        <div className="comments-section">
          {/*Comments will be displayed here */}
        </div>
      </div>
    </div>
  );
}

export default Post;
