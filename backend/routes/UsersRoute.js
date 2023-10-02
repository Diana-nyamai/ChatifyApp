const router = require('express').Router();
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

// update user
router.put('/:id', async (req, res)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin){
        // if user requests to update password encrypt it
        if (req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                console.log(err)
            }   
        }

        // otherwise update the user fields
        try{
            const user = await User.findByIdAndUpdate(req.params.id, 
                {$set: req.body});
                res.status(200).json("user Updated successfully"); 
        }catch(err){ console.log(err)}
    }else{
        return res.status(403).json("You can only update on your account");
    }
})

// delete user
router.delete('/:id', async (req, res)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user deleted successfully");
        }catch(err){
            console.log(err);
        }
    }
    else{
        res.status(403).json("You can only delete your account");
    }
})

// get user
router.get('/', async (req, res)=>{
    const userId = req.query.userId;
    const username = req.query.username;

        try{
             const user = userId
             ? await User.findById(userId) 
             : await User.findOne({username: username});
             const {password, updatedAt, ...others} = user._doc
             res.status(200).json(others);
        }
        catch(err){
            console.log(err)
        } 
})

// follow user
router.put('/:id/follow', async(req, res)=>{
    if (req.body.userId !== req.params.id){
        try{
            // user we searching
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId); //you as the user
            if (!user.followers.includes(req.body.userId)){
                // other  user followers
                await user.updateOne({$push: {followers: req.body.userId}});
                // your following
                await currentUser.updateOne({$push: {following: req.params.id}});
                res.status(200).json("user has been followed");
            }
            else{
                res.status(403).json("You already followed this user");
            }
        }
        catch(err){ 
            return res.status(403).json(err);
        }
    }
    else{
        res.status(500).json("You can't follow yourself");
    }
})

// unfollow user
router.put('/:id/unfollow', async (req, res)=>{
    if (req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}})
                await currentUser.updateOne({$pull: {following: req.params.id}})
                res.status(200).json("user unfollowed successfully");
            }
            else{
                res.status(403).json("you don't follow this user");
            }
        }
       catch(err) {
        return res.status(500).json(err);
       }     
    }
    else{
        res.status(403).json("you cant unfollow yourself");
    }
})

module.exports = router