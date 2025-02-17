<?php
require_once '../config/database.php';

class User {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function createUser($name, $email, $password) {
        $stmt = $this->pdo->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
        return $stmt->execute([$name, $email, $password]);
    }

    public function loginUser($email, $password) {
        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE email = ? AND password = ?');
        $stmt->execute([$email, $password]);
        return $stmt->fetch();
    }
}