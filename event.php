<?php
require_once '../controllers/EventController.php';

$pdo = require '../config/database.php';
$eventController = new EventController($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $eventController->createEvent($data['title'], $data['description'], $data['date'], $data['location'], $data['createdBy']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $event = $eventController->getEvent($_GET['id']);
        echo json_encode($event);
    } else {
        $events = $eventController->getAllEvents();
        echo json_encode($events);
    }
}