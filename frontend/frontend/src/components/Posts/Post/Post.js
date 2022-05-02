import React from 'react';
import Styles from './Post.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts'

const Post = ({post, setCurrentID}) => {
    const dispatch = useDispatch();

    return (
        <div className={Styles.post}>
            <img src={post.selectedFile} />
            <div className={Styles.header}>
                <h2>{post.creator}</h2>
                <MoreHorizIcon onClick={()=>setCurrentID(post._id)}/>
            </div>
            <h4 className={Styles.createdAt}>{moment(post.createdAt).fromNow()}</h4>
            <h3 className={Styles.tags}>{(String(post.tags)).split(",").map(tag=>`#${tag} `)}</h3>
            <h3 className={Styles.title}>{post.title}</h3>
            <p className={Styles.message}>{post.message}</p>
            <div className={Styles.footer}>
                <div className={Styles.like} onClick={()=>{dispatch((likePost(post._id)))}}>
                    <ThumbUpOffAltIcon />
                    <p>LIKE {post.likeCount}</p>
                </div>
                <div className={Styles.delete} onClick={()=>{dispatch(deletePost(post._id))}}>
                    <DeleteIcon />
                    <p>DELETE</p>
                </div>
                
            </div>
        </div>
    )
}

export default Post;