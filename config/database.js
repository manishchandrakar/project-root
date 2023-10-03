// ./config/database.js

import mongoose from 'mongoose';

// Replace the following with your actual MongoDB connection string
const dbURI = 'mongodb://localhost:27017/project-root';

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

// Event handlers for database connection
db.on('connected', () => {
  console.log(`Connected to MongoDB at ${dbURI}`);
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Graceful shutdown of the database connection on application termination
process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection terminated due to application termination');
    process.exit(0);
  });
});
