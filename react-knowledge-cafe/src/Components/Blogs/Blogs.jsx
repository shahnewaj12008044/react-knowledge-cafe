import React, { useEffect, useState } from 'react'
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Blogs = () => {
    //all hooks one for managing blogs and another for bookmarks
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [time,setTime] = useState(0);
      //for checking the bookmark button is active or not
    const [isBookmarked, setIsBookmarked] = useState(false);



    /*handle add to cart function : declared in parent(blogs) then passed to blog 
    through props to blog cause the info has to be shown in
     bookmark which is not a child of blog*/


    const handleaddToBookmarks = (blog) =>{
        
        const {id,Blog_title } = blog;
        //setting the three necessary info to bookmarks along with previous one 
        //as use state is immutable
        
        const isAlreadyBookmarked = bookmarks.find(item => item.id === id);
        if (isAlreadyBookmarked) {
            
            toast.error('Blog already exists in bookmarks!');
            return;    
        }
        setIsBookmarked(!isBookmarked);
        const newBookmarks = [...bookmarks,{id,Blog_title }];
        setBookmarks(newBookmarks)
    }


    //time function
    const handleTime = (newTime) =>{
        setTime(time + newTime)
    }
    // console.log(time)


    // console.log(bookmarks)
    useEffect( ()=>{
        fetch('blog.json')
         .then(res => res.json())
          .then(data => setBlogs(data))

    },[])
    // console.log(blogs)
    return (
        <div className = "blogs-container">
            <div className = 'single-blog'>
                {
                    blogs.map( blog =><Blog 
                        key = {blog.id}
                         handleaddToBookmarks = {handleaddToBookmarks}
                         handleTime = {handleTime}
                         isBookmarked = {isBookmarked}
                          blog = {blog}></Blog>)
                }

            </div>
            <div className='blogs-list'>
                <h3 className='total-time'>Spent time on read: {time}</h3>
                <Bookmarks
                bookmarks = { bookmarks}
                ></Bookmarks>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blogs;