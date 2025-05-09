const express = require('express');
const { sendMessage, getMessages } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Protected routes
router.post('/', protect, sendMessage);         // Send a message
router.get('/:userId', protect, getMessages);    // Get messages with a specific user

module.exports = router;
