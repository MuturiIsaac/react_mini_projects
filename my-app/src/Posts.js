// Posts.js
import React from 'react';
import Post from './Post'; // Import the Post component

const Posts = () => {
  const posts = [
    { title: 'Post 1', excerpt: 'This is a short excerpt of Post 1...', content: 'This is the full content of Post 1...' },
    { title: 'Post 2', excerpt: 'This is a short excerpt of Post 2...', content: 'This is the full content of Post 2...' },
    // Add more posts as needed
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} excerpt={post.excerpt} content={post.content} />
      ))}
    </div>
  );
};

export default Posts;