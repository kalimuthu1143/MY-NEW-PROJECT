<?php
require_once '../controllers/RsvpController.php';

$pdo = require '../config/database.php';
$rsvpController = new RsvpController($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $rsvpController->createOrUpdateRsvp($data['user'], $data['event'], $data['status']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['eventId'])) {
        $rsvps = $rsvpController->getRsvpsForEvent($_GET['eventId']);
        echo json_encode($rsvps);
    }
}