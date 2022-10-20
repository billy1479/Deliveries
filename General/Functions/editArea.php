<?php
// only lets you edit the charge
require_once __DIR__.'\connect.php';
$id = $_POST['id'];
$newCharge = $_POST['charge'];
$sql = $conn->prepare('UPDATE locations SET charge=? where ID=?');
$sql->bind_param('ss', $newCharge, $id);
$sql->execute();
$conn->close();
?>