<?php
require_once __DIR__.'\connect.php';
$areaName = $_POST['name'];
$charge = $_POST['charge'];
$sql = $conn->prepare('INSERT INTO locations (Name, Charge) VALUES (?,?)');
$sql->bind_param('ss', $areaName, $charge);
$sql->execute();
$conn->close();
?>    