import User from '../models/User.js'; // Import your User model or the relevant model

class ImageController {
  async getUserImage(req, res) {
    try {
      // Get the user ID from the query parameters
      const { user_id } = req.query;

      // Check if the user exists in the database
      const user = await User.findById(user_id);

      // If the user does not exist, return a 404 Not Found response
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      // Get the user's image URL
      const imageUrl = user.image;

      // Return the user's image
      res.json({ imageUrl });
    } catch (error) {
      console.error('Error fetching user image:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
}

export default new ImageController();
