import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
const publicPath = path.join(new URL('.', import.meta.url).pathname, 'public');
app.use(express.static(publicPath));

// Set up middleware (e.g., body parser, authentication middleware, etc.)

// Set up routes
import detailsRoutes from './routes/detailsRoutes.js';
import updateRoutes from './routes/updateRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import insertRoutes from './routes/insertRoutes.js';
import deleteRoutes from './routes/deleteRoutes.js';
import { Db } from 'mongodb';

app.use('/details', detailsRoutes);
app.use('/update', updateRoutes);
app.use('/image', imageRoutes);
app.use('/insert', insertRoutes);
app.use('/delete', deleteRoutes);

// Define a route to render the alluserinformationpage.ejs file
app.get('/allusers', (req, res) => {
  // You can add logic here to fetch user data from your database if needed
  // For now, let's assume you have an array of user objects
  const users = [
    { user_id: 1, user_name: 'User 1', user_email: 'user1@example.com' },
    { user_id: 2, user_name: 'User 2', user_email: 'user2@example.com' },
    // Add more user objects as needed
  ];

  // Render the alluserinformationpage.ejs file and pass the 'users' data to it
  res.render('alluserinformationpage', { users });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
