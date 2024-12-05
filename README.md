# Todo-App

Simple Full-stack todo app

## Overview

This is a Fullstack application that manages user tasks. The app is built with Express.js and connects to a MongoDB database running in Docker. The frontend is built with Vue.js.

## Features

- CRUD Operations on user tasks
- Experienced frontend with Vuejs
- MongoDB database for user data storage
- Dockerized MongoDB and Express for ease of deployment

## Technologies Used

- **Frontend**: Vue.js
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (Dockerized)
- **API Testing**: Postman

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PydevAzmi/Todo-App.git
   ```

2. Navigate to the Backend project directory:

   ```bash
   cd Todo-App/backend
   ```

3. Setup the environment variables:
   ```bash
   touch .env
   ```
   Write the following in the .env file:
   ```
    NODE_PORT=8000
    MONGODB_DATABASE=mydb
    MONGODB_PASSWORD=password
    MONGODB_DOCKER_PORT=27017
    MONGODB_USER=pydevazmi
    MONGODB_HOST=localhost
   ```
4. build the Docker image:

   ```bash
   docker-compose build
   ```

5. run the Docker containers:

   ```bash
   docker-compose up
   ```

   The backend will be accessible at http://localhost:8000.

6. Navigate to the Frontend project directory:
   ```bash
    cd Todo-App/frontend
   ```
7. Install the dependencies:
   ```bash
   npm install
   ```
8. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be accessible at http://localhost:3000.

## API Documentation

this is the API documentation for the _TODO_ application published on Postman:
https://documenter.getpostman.com/view/23311056/2sAYBbc8AS

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for enhancements or bug fixes.

## License

This project is licensed under the MIT License.
