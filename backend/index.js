const http = require('http');
const dotenv = require('dotenv');
const express = require('express');
var cors = require('cors')
const taskRoutes = require('./src/routes/taskRoutes');

require('./src/config/dbConnect').connect();

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// routes
app.use('/tasks',  cors(corsOptions), taskRoutes);

// Server
const server = http.createServer(app);
const port = process.env.NODE_PORT || 8000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});