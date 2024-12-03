const http = require('http');
const dotenv = require('dotenv');
const express = require('express');
require('./src/config/dbConnect').connect();

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// View engine
app.set('view engine', 'ejs');

// routes
app.get('/' ,(req, res)=>{
    res.status(200).json({message: "Welcome to the API"});
})

// Server
const server = http.createServer(app);
const port = process.env.NODE_PORT || 8000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});