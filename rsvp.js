const express = require('express');
const router = express.Router();
const rsvpController = require('../controllers/rsvpController');

router.post('/', rsvpController.createOrUpdateRsvp);
router.get('/event/:eventId', rsvpController.getRsvpsForEvent);

module.exports = router;