import { FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../constants/actionTypes'


const defaultPosts = [];

export default (posts=defaultPosts, action) => {
    if(action.type===FETCH_ALL){
        posts = action.payload;
        return posts;
    }
    if(action.type===CREATE_POST){
        const newPost = action.payload;
        return [...posts, newPost]       
    }
    if(action.type===UPDATE_POST || action.type===LIKE_POST){
        const updatePost = action.payload;
        posts = posts.map((post)=>(post._id===updatePost._id?updatePost:post));
        return posts;
    }
    if(action.type===DELETE_POST){
        posts = posts.filter((post)=>post._id!==action.payload);
        return posts;
    }
    return posts;
}