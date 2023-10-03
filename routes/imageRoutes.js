import express from 'express';
import ImageController from '../controllers/ImageController.js'; // Import your ImageController or relevant controller

const router = express.Router();

// GET /image/:user_id - Fetch user image by user ID
router.get('/:user_id', ImageController.getUserImage);

export default router;
