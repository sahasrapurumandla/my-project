const Meeting = require('../models/Meeting');

// Schedule a new meeting
exports.scheduleMeeting = async (req, res) => {
  const { studentId, facultyId, dateTime } = req.body;

  // Save the meeting
  const meeting = await Meeting.create({ studentId, facultyId, dateTime });

  res.status(201).json({ message: 'Meeting scheduled successfully', meeting });
};

// View all meetings for logged in user
exports.getMeetings = async (req, res) => {
  const userId = req.user.id;

  const meetings = await Meeting.find({
    $or: [{ studentId: userId }, { facultyId: userId }]
  })
    .populate('studentId', 'name email')
    .populate('facultyId', 'name email');

  res.json(meetings);
};
