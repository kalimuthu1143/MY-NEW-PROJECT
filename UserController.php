<?php
require_once '../models/User.php';

class UserController {
    private $user;

    public function __construct($pdo) {
        $this->user = new User($pdo);
    }

    public function createUser($name, $email, $password) {
        return $this->user->createUser($name, $email, $password);
    }

    public function loginUser($email, $password) {
        return $this->user->loginUser($email, $password);
    }
}