const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

// Importing Routes
const userRoute = require('./routes/UsersRoute');
const AuthRoute = require('./routes/AuthRoute');
const PostRoute = require('./routes/PostRoute');
const FilesRoute  = require('./routes/Files');

const server = express();

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
.then(()=> console.log("database connection established"))
.catch((err)=> console.log("couldn't connect to database", err));

// middleware
server.use(express.static('uploads'));
server.use(express.json());
server.use(helmet());
server.use(morgan("common"));
server.use(cors());

// handle favicon
server.get('/favicon.ico', (req, res)=>{
    res.status(204).end();
})
// apis
server.use('/api/users', userRoute);
server.use('/api/auth', AuthRoute);
server.use('/api/posts', PostRoute);
server.use('/api/files', FilesRoute);

// listen to port 5000
server.listen(5000, ()=> console.log('listening on port 5000'));