const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  // Get JWT token from header
  const token = req.header('x-auth-token');

  // Check if no token found
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token found, artistization denied.' });
  }

  // Verify found token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid.' });
  }
};
