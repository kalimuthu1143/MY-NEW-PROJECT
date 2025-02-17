const Rsvp = require('../models/rsvp');

// Create or update RSVP
exports.createOrUpdateRsvp = async (req, res) => {
  try {
    const { user, event, status } = req.body;
    let rsvp = await Rsvp.findOne({ user, event });
    if (rsvp) {
      rsvp.status = status;
    } else {
      rsvp = new Rsvp({ user, event, status });
    }
    await rsvp.save();
    res.status(201).json(rsvp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get RSVPs for an event
exports.getRsvpsForEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const rsvps = await Rsvp.find({ event: eventId }).populate('user', 'name');
    res.status(200).json(rsvps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};