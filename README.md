# Learn MongoDB

A simple application to demonstrate the implementation of all four CRUD operations (Create, Read, Update, Delete) using MongoDB. This project allows users to create, edit, update, and delete posts.

## Overview

This project is designed to help users learn the basics of MongoDB by implementing a simple application that performs CRUD operations. Users can create posts, read or view posts, update posts, and delete posts. The application is built using Node.js, Express, and MongoDB.

## Features

- **Create a Post**: Users can create a new post by submitting a form.
- **Read Posts**: Users can view a list of all posts.
- **Update a Post**: Users can edit the content of an existing post.
- **Delete a Post**: Users can delete a post.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing and retrieving data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/learn-mongodb.git
    ```

2. Navigate to the project directory:

    ```bash
    cd learn-mongodb
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Set up your MongoDB database:

    - Ensure MongoDB is installed and running on your local machine or connect to a MongoDB Atlas cluster.
    - Create a `.env` file in the root of your project and add your MongoDB URI:

      ```env
      MONGODB_URI=mongodb://localhost:27017/learn-mongodb
      ```

5. Start the application:

    ```bash
    npm start
    ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- **Create a Post**: Navigate to the "Create Post" page, fill out the form, and submit to create a new post.
- **Read Posts**: Visit the home page to see a list of all posts.
- **Update a Post**: Click the "Edit" button on a post, modify the content, and submit the form to update the post.
- **Delete a Post**: Click the "Delete" button on a post to remove it from the database.

## API Endpoints

- `GET /posts` - Retrieve all posts.
- `POST /posts` - Create a new post.
- `GET /posts/:id/edit` - Retrieve a post for editing.
- `PUT /posts/:id` - Update an existing post.
- `DELETE /posts/:id` - Delete a post.

