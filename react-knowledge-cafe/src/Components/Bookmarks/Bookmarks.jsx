import React from 'react';
import './Bookmarks.css'

const Bookmarks = (props) => {
    // console.log(props)
    const{bookmarks} = props;
    return (
        <div className='bookmark'>
            <h2>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><h4 className='bookmark-title'
                key = {bookmark.id} >{bookmark.Blog_title}</h4>)
            }
        </div>
    );
};

export default Bookmarks;