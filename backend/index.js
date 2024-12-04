const http = require('http');
const dotenv = require('dotenv');
const express = require('express');
const taskRoutes = require('./src/routes/taskRoutes');

require('./src/config/dbConnect').connect();

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// routes
app.use('/tasks', taskRoutes);

// Server
const server = http.createServer(app);
const port = process.env.NODE_PORT || 8000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});