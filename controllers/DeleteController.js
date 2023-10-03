import User from '../models/User.js'; // Import your User model or the relevant model

class DeleteController {
  async deleteUser(req, res) {
    try {
      // Get the user ID from the request parameters
      const { user_id } = req.params;

      // Check if the user exists in the database
      const user = await User.findById(user_id);

      // If the user does not exist, return a 404 Not Found response
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      // Delete the user from the database
      await user.remove();

      // Return a success message
      res.json({ message: 'User deleted successfully.' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
}

export default new DeleteController();
