// Post.js
import React, { useState } from 'react';
import './post.css'; // Import the CSS file

const Post = ({ title, excerpt, content }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="post-card">
      <h2 className="post-title">{title}</h2>
      <p className="post-excerpt">{showMore ? content : excerpt}</p>
      <button className="read-more-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Post;