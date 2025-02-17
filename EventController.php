<?php
require_once '../models/Event.php';

class EventController {
    private $event;

    public function __construct($pdo) {
        $this->event = new Event($pdo);
    }

    public function createEvent($title, $description, $date, $location, $createdBy) {
        return $this->event->createEvent($title, $description, $date, $location, $createdBy);
    }

    public function getEvent($id) {
        return $this->event->getEvent($id);
    }

    public function getAllEvents() {
        return $this->event->getAllEvents();
    }
}