const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/', eventController.createEvent);
router.get('/:id', eventController.getEvent);
router.get('/', eventController.getAllEvents);

module.exports = router;