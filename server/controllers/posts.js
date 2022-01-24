import express from 'express';
import mongoose from 'mongoose';

import PostDriver from '../models/PostDriver.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const PostDrivers = await PostDriver.find();
                
        res.status(200).json(PostDrivers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const post = req.body;

    //this might break
    const newPostMessage = new PostDriver({ ...post, createdAt: new Date().toISOString() })

    try {
        let result = await newPostMessage.save(); // this is saved
        
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostDriver.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
    
}

export default router;