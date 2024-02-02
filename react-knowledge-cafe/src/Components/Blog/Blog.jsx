import React from 'react';
import './Blog.css'

const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
            <img className='blog-image' src={blog.image} alt="" />
            <p>name: {blog.Author_name}</p>
        </div>
    );
};

export default Blog;