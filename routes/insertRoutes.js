import express from 'express';
import InsertController from '../controllers/InsertController.js'; // Import your InsertController or relevant controller

const router = express.Router();

// POST /insert - Insert a new user
router.post('/', InsertController.insertUser);

export default router;
