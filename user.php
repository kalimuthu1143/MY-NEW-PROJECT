<?php
require_once '../controllers/UserController.php';

$pdo = require '../config/database.php';
$userController = new UserController($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if ($_POST['action'] === 'signup') {
        $userController->createUser($data['name'], $data['email'], $data['password']);
    } elseif ($_POST['action'] === 'login') {
        $user = $userController->loginUser($data['email'], $data['password']);
        echo json_encode($user);
    }
}