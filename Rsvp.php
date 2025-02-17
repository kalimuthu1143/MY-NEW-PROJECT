<?php
require_once '../config/database.php';

class Rsvp {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function createOrUpdateRsvp($user, $event, $status) {
        $stmt = $this->pdo->prepare('INSERT INTO rsvps (user_id, event_id, status) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE status = VALUES(status)');
        return $stmt->execute([$user, $event, $status]);
    }

    public function getRsvpsForEvent($eventId) {
        $stmt = $this->pdo->prepare('SELECT * FROM rsvps WHERE event_id = ?');
        $stmt->execute([$eventId]);
        return $stmt->fetchAll();
    }
}