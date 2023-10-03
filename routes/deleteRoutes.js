import express from 'express';
import DeleteController from '../controllers/DeleteController.js'; // Import your DeleteController or relevant controller

const router = express.Router();

// DELETE /delete/:user_id - Delete a user by ID
router.delete('/:user_id', DeleteController.deleteUser);

export default router;
