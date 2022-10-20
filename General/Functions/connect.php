<?php
$username = 'root';
$password = '';
$servername = 'localhost';
$dbname = 'chippy';
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed");
} else {
    // nothing
}
?>