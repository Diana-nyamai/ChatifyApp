const router = require('express').Router();
const User = require('../models/UserModel');
const bcrypt = require('bcrypt')

// Register User
router.post('/register', async (req, res)=>{ 
   try{
    // encrypt the user password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    // get user info
    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
   });

//    save user information to database
    const newUser = await user.save();
    res.status(200).json(newUser);
   }catch(err){
    console.log(err);
   }
})

// login User
router.post('/login', async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found");

        // check password
        const userPassword = await bcrypt.compare(req.body.password, user.password);
        !userPassword && res.status(404).json("incorrect password");

        res.status(200).json(user);  
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router