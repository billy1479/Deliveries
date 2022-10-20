<?php
require_once __DIR__.'\connect.php';
$id = $_POST['id'];
$conn->query('DELETE from locations where ID="'.$id.'"');
$conn->close();
?>