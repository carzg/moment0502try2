import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import Styles from './Form.module.css';
import { createPost, updatePost } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux'

const Form = ({currentID, setCurrentID}) => {
    const [newPost, setNewPost] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const post = useSelector((state)=>(currentID?state.posts.find((post)=>post._id===currentID):null));

    useEffect(()=>{
        if(currentID) setNewPost(post)
    }, [post])

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(!currentID){
            dispatch(createPost(newPost)); 
            setCurrentID(null);
            handleClear();
        }else{
            dispatch(updatePost(currentID, newPost));
            setCurrentID(null);
            handleClear();
        }
    }

    const handleClear = () => {
        setNewPost({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

    return (
        <div className={Styles.form}>
            {!currentID?<h1>Creating a Memory</h1>:<h1>Editing a Memory</h1>}
            <input placeholder=' Creator' value={newPost.creator} onChange={(e)=>setNewPost({...newPost, creator: e.target.value})}/>
            <input placeholder=' Title' value={newPost.title} onChange={(e)=>setNewPost({...newPost, title: e.target.value})}/>
            <input placeholder=' Message' value={newPost.message} onChange={(e)=>setNewPost({...newPost, message: e.target.value})}/>
            <input placeholder=' Tags' value={newPost.tags} onChange={(e)=>setNewPost({...newPost, tags: e.target.value})}/>
            <div><FileBase type="file" multiple={false} onDone={({base64})=>{setNewPost({...newPost, selectedFile: base64})}}></FileBase></div>
            <button type='submit' onClick={()=>handleSubmit()}>SUBMIT</button>
            <button onClick={()=>handleClear()}>CLEAR</button>
        </div>
    )
}

export default Form;