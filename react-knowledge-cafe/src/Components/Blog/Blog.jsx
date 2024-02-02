import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <img className="blog-image" src={blog.image} alt="" />
      <div className="blog-description">
        <div className="author">
          <img className="author-image" src={blog.Author_image} alt="" />
          <div>
            <h4>{blog.Author_name}</h4>
            <p>{blog.Publish_Date}</p>
          </div>
        </div>
        <p>{blog.Read_time} min read  
        <FontAwesomeIcon icon={faBookmark} />
         </p>
      </div>
      <h1>How to get your first job as a self-taught programmer</h1>
      
    </div>
  );
};

export default Blog;
