import User from '../models/User.js'; // Import your User model or the relevant model

class DetailsController {
  async getUserDetails(req, res) {
    try {
      // Get the user ID from the query parameters
      const { user_id } = req.query;

      // Check if the user exists in the database
      const user = await User.findById(user_id);

      // If the user does not exist, return a 404 Not Found response
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      // Return the user details
      res.json({ user });
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
}

export default new DetailsController();
