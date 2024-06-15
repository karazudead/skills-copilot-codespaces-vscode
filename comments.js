// Create web serveruse express.Router() and use controllers to handle requests
// Use express.Router() to handle routes
// Use controllers to handle requests
const express = require('express');
const router = express.Router();
// Import the comments controller
const commentsCtrl = require('../controllers/comments');

// Define the route for getting all comments
router.get('/', commentsCtrl.getAllComments);

// Define the route for getting a comment by id
router.get('/:id', commentsCtrl.getCommentById);

// Define the route for creating a new comment
router.post('/', commentsCtrl.createComment);

// Define the route for updating a comment
router.put('/:id', commentsCtrl.updateComment);

// Define the route for deleting a comment
router.delete('/:id', commentsCtrl.deleteComment);

// Export the router
module.exports = router;