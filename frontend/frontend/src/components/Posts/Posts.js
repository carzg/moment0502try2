import React from 'react';
import Post from './Post/Post';

import { useSelector } from 'react-redux';
import Styles from './Posts.module.css';

const Posts = (props) => {
    const posts = useSelector((state)=>(state.posts))

    return (
        <div className={Styles.posts}>
            {posts.map((post, index)=>(<Post key={post+index} post={post} setCurrentID={props.setCurrentID} />))}
        </div>
    )
}

export default Posts;