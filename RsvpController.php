<?php
require_once '../models/Rsvp.php';

class RsvpController {
    private $rsvp;

    public function __construct($pdo) {
        $this->rsvp = new Rsvp($pdo);
    }

    public function createOrUpdateRsvp($user, $event, $status) {
        return $this->rsvp->createOrUpdateRsvp($user, $event, $status);
    }

    public function getRsvpsForEvent($eventId) {
        return $this->rsvp->getRsvpsForEvent($eventId);
    }
}