import express from 'express';
import UpdateController from '../controllers/UpdateController.js'; // Import your UpdateController or relevant controller

const router = express.Router();

// PUT /update - Update user details
router.put('/', UpdateController.updateUser);

export default router;
