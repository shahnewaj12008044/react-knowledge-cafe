import React, { useEffect, useState } from 'react'
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';


const Blogs = () => {
    //all hooks one for managing blogs and another for bookmarks
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);


    /*handle add to cart function : declared in parent(blogs) then passed to blog 
    through props to blog cause the info has to be shown in
     bookmark which is not a child of blog*/
    const HandleaddToBookmarks = (blog) =>{
        const {id,Read_time,Blog_title } = blog;
        //setting the three necessary info to bookmarks along with previous one 
        //as use state is immutable
        const newBookmarks = [...bookmarks,{id,Read_time,Blog_title }];
        setBookmarks(newBookmarks)
    }
    console.log(bookmarks)
    useEffect( ()=>{
        fetch('blog.json')
         .then(res => res.json())
          .then(data => setBlogs(data))

    },[])
    // console.log(blogs)
    let time = 0;
    return (
        <div className = "blogs-container">
            <div className = 'single-blog'>
                {
                    blogs.map( blog =><Blog 
                        key = {blog.id}
                         HandleaddToBookmarks = {HandleaddToBookmarks}
                          blog = {blog}></Blog>)
                }

            </div>
            <div className='blogs-list'>
                <h3 className='total-time'>Spent time on read: {time}</h3>
                <Bookmarks
                bookmarks = { bookmarks}
                ></Bookmarks>
            </div>
        </div>
    );
};

export default Blogs;