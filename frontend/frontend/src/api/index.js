import axios from 'axios';

const URL = 'https://moments12345.herokuapp.com/posts';

export const fetchPosts = () => axios.get(URL);

export const createPost = (newPost) => axios.post(URL, newPost);

export const updatePost = (_id, updatedPost) => axios.patch(`${URL}/${_id}`, updatedPost)

export const deletePost = (id) => axios.delete(`${URL}/${id}`);

export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`)