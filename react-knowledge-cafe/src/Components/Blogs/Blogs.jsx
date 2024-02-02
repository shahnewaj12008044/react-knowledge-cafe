import React, { useEffect, useState } from 'react'
import './Blogs.css'


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( ()=>{
        fetch('blog.json')
         .then(res => res.json())
          .then(data => setBlogs(data))

    },[])
    console.log(blogs)
    return (
        <div className = "blogs-container">
            <div className = 'single-blog'>
                {
                    // blogs.map( blog =>)
                }

            </div>
            <div className='blogs-list'>
                <h3>Blog list is here</h3>
            </div>
        </div>
    );
};

export default Blogs;