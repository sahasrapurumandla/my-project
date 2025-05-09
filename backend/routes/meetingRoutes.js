const express = require('express');
const { scheduleMeeting, getMeetings } = require('../controllers/meetingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Protected routes
router.post('/', protect, scheduleMeeting);   // Create a meeting
router.get('/', protect, getMeetings);         // View all meetings for logged in user

module.exports = router;
