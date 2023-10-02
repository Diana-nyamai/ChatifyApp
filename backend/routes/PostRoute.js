const multer = require('multer');
const router = require('express').Router();
const postModel = require('../models/PostModel');
const userModel = require('../models/UserModel');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{cb(null, 'uploads');},
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'image_' + uniqueSuffix + '-.jpeg');
    }
})
const upload = multer({storage:storage});

// create post
router.post('/', upload.single('image'), async(req, res)=>{
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);

    const { userId, desc } = req.body;
    const imagePath = req.file.path.replace(/\\/g, '/').replace('uploads/', '');
    // const imagePath = req.file.path;

    try{
         const newPost = await new postModel({
            userId: userId,
            desc: desc,
            image: imagePath
         });
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    }
    catch(err){
        return res.status(500).json(err);
    }
})

// update post
router.put('/:id', async(req, res)=>{
    try{
        const post = await postModel.findById(req.params.id);
        if (post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("post Updated successfully");
        } 
        else{
            res.status(403).json("You can only update your own post")
        }
    }
    catch(err){
        return res.status(500).json(err)
    }
})

// delete post
router.delete('/:id', async(req, res)=>{
    try{
        const post = await postModel.findById(req.params.id);
        if (post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("post deleted successfully");
        } 
        else{
            res.status(403).json("You can only delete your own post")
        }
    }
    catch(err){
        return res.status(500).json(err)
    }
})

// like/dislike post
router.put('/:id/like', async (req, res)=>{
    try{
        const post = await postModel.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("The post has been liked");
        }
        else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("The post has been disliked");
        } 
    }
    catch(err){
        return res.status(500).json(err);
    }
});

// get post
router.get('/:id', async (req, res)=>{
    try{
        const paramId = req.params.id;
        const post = await postModel.findById(paramId);

        if(!post){
            return res.status(404).json({message: 'post not found'});
        }

        const imagePath = path.join(__dirname, 'uploads/', post.image.filename);
        res.sendFile(imagePath);
    }
    catch(err){
        return res.status(500).json(err);
    }
})

// get timeline posts
router.get('/timeline/:userId', async(req, res)=>{
    try{
        const currentUser = await userModel.findById(req.params.userId);
        const userPosts = await postModel.find({userId: currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.following.map(friendId =>{
               return postModel.find({userId: friendId})
            } )
        );
        res.status(200).json(userPosts.concat(...friendPosts))
    }
    catch(err){
        return res.status(500).json(err);
    }
})

// get user's all posts
router.get('/profile/:username', async(req, res)=>{
    try{
        const user = await userModel.findOne({username: req.params.username});
        const posts = await postModel.find({userId: user._id});
        res.status(200).json(posts);   
    }
    catch(err){
        return res.status(500).json(err);
    }
})
module.exports = router