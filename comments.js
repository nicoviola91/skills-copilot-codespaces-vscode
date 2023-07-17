// Create web server
 
// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import controller
const controller = require("../controllers/comments");

// Handle request to get all comments
router.get("/", controller.getComments);

// Handle request to get a comment by id
router.get("/:id", controller.getCommentById);

// Handle request to add a comment
router.post("/", controller.addComment);

// Handle request to update a comment
router.put("/:id", controller.updateComment);

// Handle request to delete a comment
router.delete("/:id", controller.deleteComment);

// Export router
module.exports = router;
