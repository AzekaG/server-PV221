//express предоставляет нам метод router , 
//который вовращает обьект, к которому мы привяжем наши 
//маршруты и затем сам етот обьект привяжем к app


import express from "express";
import { deletePost, getAllPosts, getPostById, updatePost, createPost } from '../Controllers/PostController.mjs'

const router = express.Router();

//когда пользователь будет обращаться к странице пост , то будет вызываться метод гетоллпостс
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);


export default router;