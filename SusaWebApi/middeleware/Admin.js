const jwt = require('jsonwebtoken');
const User = require('../Model/Admin'); // Admin model
const secretKey = 'mnbvcxzasdfghjklpoiuytrewq';

const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.split(' ')[1] ||
      req.body.token ||
      req.query.token ||
      req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: No token provided' });
    }
    const decodedToken = jwt.verify(token, secretKey);
    const user = await User.findById(decodedToken.id || decodedToken._id); // Match _id from token
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: User not found' });
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.error("❌ Auth error:", error.message);
    return res.status(401).json({ message: 'Authentication failed: Invalid token' });
  }
};

module.exports = authMiddleware;
