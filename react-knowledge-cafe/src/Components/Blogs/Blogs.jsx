import React, { useEffect, useState } from 'react'
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';


const Blogs = () => {
    //all hooks one for managing blogs and another for bookmarks
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [time,setTime] = useState(0);


    /*handle add to cart function : declared in parent(blogs) then passed to blog 
    through props to blog cause the info has to be shown in
     bookmark which is not a child of blog*/
    const handleaddToBookmarks = (blog) =>{
        const {id,Blog_title } = blog;
        //setting the three necessary info to bookmarks along with previous one 
        //as use state is immutable
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
                         handleTime = {handleTime
                        }
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