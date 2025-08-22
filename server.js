require('dotenv').config(); // ✅ Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registrationRoutes = require('./routes/registration.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, { autoIndex: true })
  .then(() => console.log('✅ MongoDB walk connected'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

// Test route
app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'Walk Talk Inspire API' });
});

// API routes
app.use('/api/registrations', registrationRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
