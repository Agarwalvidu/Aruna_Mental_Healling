import React, { useState } from 'react';
import axios from 'axios';
import './AddPost.css';
import creative from "../assets/images/creative.png"

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('image', image);

      await axios.post('http://localhost:5000/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      });
      console.log('Post added successfully');
      window.location.reload();
      // Optionally, you can redirect or perform any other action after adding the post
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="container">
      <div className="image">
      <img src={creative} alt='creative' style={{width: '200px'}}></img>
      </div>
      <div>
      <h2>Share your creativity</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control-file" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default AddPost;
