<?php
require_once '../config/database.php';

class Event {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function createEvent($title, $description, $date, $location, $createdBy) {
        $stmt = $this->pdo->prepare('INSERT INTO events (title, description, date, location, created_by) VALUES (?, ?, ?, ?, ?)');
        return $stmt->execute([$title, $description, $date, $location, $createdBy]);
    }

    public function getEvent($id) {
        $stmt = $this->pdo->prepare('SELECT * FROM events WHERE id = ?');
        $stmt->execute([$id]);
        return $stmt->fetch();
    }

    public function getAllEvents() {
        $stmt = $this->pdo->query('SELECT * FROM events');
        return $stmt->fetchAll();
    }
}