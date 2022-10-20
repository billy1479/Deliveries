<?php
require_once __DIR__.'\connect.php';
$id = $_POST['id'];
$conn->query('DELETE from postcodes where ID="'.$id.'"');
$conn->close();
?>