import User from '../models/User.js'; // Import your User model or the relevant model

class InsertController {
  async insertUser(req, res) {
    try {
      // Get user details from the request body
      const { user_details } = req.body;

      // Create a new user instance
      const newUser = new User(user_details);

      // Save the new user to the database
      await newUser.save();

      // Return a success message
      res.json({ message: 'User inserted successfully.', user: newUser });
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
}

export default new InsertController();
