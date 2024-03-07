import Post from "../models/Post.mjs";


//эта функция связана с маршрутом, сюда автоматически попадает request , response
export const getAllPosts = async (req, res) => {
    //find - получить все что есть в коллекции. Параметр - пустой обьект 
    const posts = await Post.find({});

    res.send(posts);
};

export const getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        //const {id } = req.params;
        const post = await Post.findById(id);
        res.send(post);
    }
    catch (err) {
        res.status(404).json({
            status: 'error',
            message: 'Post not found'
        });
    }
};
export const createPost = async (req, res) => {

    try {
        const post = new Post(req.body);
        await post.save();
        res.send(post);
    }
    catch (error) {
        res.status(400).json(error);
    }
};

export const updatePost = async (req, res) => {


    try {
        const id = req.params.id;
        const data = req.body;

        const post = await Post.findByIdAndUpdate(id, data);
        res.json({
            status: 'success',
            message: 'Post is updated'
        });
    }
    catch (error) {
        res.status(400).json(error);
    }
};

export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        await Post.findByIdAndDelete(id);
        res.json({
            status: 'success',
            message: 'Post is deleted'
        });
    }
    catch (error) {
        res.status(400).json(error);
    }
};