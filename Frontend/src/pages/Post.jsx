import React from 'react';
import './post.css';

function Post() {
  return (
    <div className="post">
      <div className="container">
        <div className="user-profile">
          {/* Aquí puedes poner la imagen del usuario */}
          <img src="person 9.png" alt="User Profile" />
        </div>
        <div className="post-box">
          <input type="text" placeholder="Título del post" />
          <textarea placeholder="Escribe tu post aquí"></textarea>
          <div className="upload-buttons">
            <label htmlFor="photo-upload">Agregar foto</label>
            <input type="file" id="photo-upload" accept="image/*" />
            <label htmlFor="video-upload">Agregar video</label>
            <input type="file" id="video-upload" accept="video/*" />
          </div>
          <button className="post-button">POST</button>
        </div>
        <div className="comments-section">
          {/* Aquí se mostrarán los comentarios */}
        </div>
      </div>
    </div>
  );
};

export default Post;

