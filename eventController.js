const Event = require('../models/event');

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location, createdBy } = req.body;
    const newEvent = new Event({ title, description, date, location, createdBy });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get event details
exports.getEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId).populate('createdBy', 'name');
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'name');
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};