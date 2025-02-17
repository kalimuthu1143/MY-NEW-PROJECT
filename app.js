const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// Connect to the database
mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Import routes
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');
const rsvpRoutes = require('./routes/rsvp');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/rsvps', rsvpRoutes);

// Start the server
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});