import express from 'express';
import DetailsController from '../controllers/detailsController.js'; // Import your DetailsController or relevant controller

const router = express.Router();

// GET /details/:user_id - Fetch user details by user ID
router.get('/:user_id', DetailsController.getUserDetails);

export default router;
