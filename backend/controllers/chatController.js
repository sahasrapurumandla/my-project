const Chat = require('../models/Chat');

// Send a chat message
exports.sendMessage = async (req, res) => {
  const { receiverId, message } = req.body;
  const senderId = req.user.id;

  const chat = await Chat.create({ senderId, receiverId, message });

  res.status(201).json({ message: 'Message sent', chat });
};

// Get all messages between two users
exports.getMessages = async (req, res) => {
  const { userId } = req.params; // ID of the person you are chatting with
  const senderId = req.user.id;

  const messages = await Chat.find({
    $or: [
      { senderId, receiverId: userId },
      { senderId: userId, receiverId: senderId }
    ]
  }).sort({ timestamp: 1 }); // Sort by time (oldest to newest)

  res.json(messages);
};
