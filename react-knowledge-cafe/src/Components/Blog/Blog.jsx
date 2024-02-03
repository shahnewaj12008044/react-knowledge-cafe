import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'


const Blog = (props) => {
  // console.log(props);
  const { blog } = props;
  const handleaddToBookmarks = props.handleaddToBookmarks;
  const handleTime = props.handleTime;
  return (
    <div className="blog">
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
        <a style={{marginLeft:"5px"}} ><FontAwesomeIcon 
        onClick={()=>handleaddToBookmarks(blog)} 
        icon={faBookmark} /></a>
         </p>
      </div>
      <h1>How to get your first job as a self-taught programmer</h1>
     <p>#{blog.hastags[0]} #{blog.hastags[1]}</p>
     <a onClick={()=>handleTime(blog.Read_time)}>Mark as Read</a>
    </div>
  );
};

export default Blog;
