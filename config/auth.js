import jwt from 'jsonwebtoken';

// Secret key for JWT
const secretKey = 'your_secret_key'; // Replace with your actual secret key

// Middleware to authenticate requests
export const authenticate = (req, res, next) => {
  // Get the token from the request header or query parameter
  const token = req.header('x-auth-token') || req.query.token;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, secretKey);

    // Attach the user information to the request object
    req.user = decoded.user;
    
    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

// Middleware to generate and return a JWT
export const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      // Add more user data to the payload as needed
    },
  };

  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
};
