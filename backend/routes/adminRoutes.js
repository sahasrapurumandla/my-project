const express = require('express');
const {
  getAllUsers,
  getAllProjects,
  getAllApplications,
  deleteUser,
} = require('../controllers/adminController');
const { protect, protectAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Admin gets all users
router.get('/users', protect, protectAdmin, getAllUsers);

// Admin gets all projects
router.get('/projects', protect, protectAdmin, getAllProjects);

// Admin gets all applications
router.get('/applications', protect, protectAdmin, getAllApplications);

// Admin deletes a user
router.delete('/users/:userId', protect, protectAdmin, deleteUser);

module.exports = router;
