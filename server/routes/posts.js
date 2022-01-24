import express from 'express';

import { getPosts, createPost, deletePost} from '../controllers/posts.js'

//import auth from '../middleware/auth.js';

const router = express.Router();


router.get('/', getPosts);
router.post('/',  createPost);
// router.patch('/:id',  updatePost); //patch used to updating exisiting documants
router.delete('/:id',  deletePost);
// router.patch('/:id/likePost', likePost);

export default router;