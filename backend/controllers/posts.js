import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await  postMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new postMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error})
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    try{
        let updatePost = await postMessage.findByIdAndUpdate({_id: _id}, post, {new: true})
        res.json(updatePost)
    } catch(error){
        res.status(404).json({message: error})
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await postMessage.findByIdAndRemove(id);
        res.json({message:'post delete successfully'})
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    try{
        const post = await postMessage.findById(id);
        const likedPost = await postMessage.findByIdAndUpdate(id, {likeCount: post.likeCount+1}, {new: true});
        res.json(likedPost);
    }catch(error){
        console.log(error)
    }
}