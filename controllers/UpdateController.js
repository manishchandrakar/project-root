import User from '../models/User.js'; // Import your User model or the relevant model

class UpdateController {
  async updateUser(req, res) {
    try {
      // Get the user ID from the request body
      const { user_id } = req.body;

      // Check if the user exists in the database
      const user = await User.findById(user_id);

      // If the user does not exist, return a 404 Not Found response
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      // Update user details based on the request body
      user.set(req.body);

      // Save the updated user to the database
      await user.save();

      // Return a success message along with the updated user data
      res.json({ message: 'User updated successfully.', user });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
}

export default new UpdateController();
