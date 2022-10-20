<?php
require_once __DIR__.'\connect.php';
$data = $_POST['data'];
$x = $conn->query('SELECT * FROM psotcodes where Name="'.$data.'"');
while ($x && $row=mysqli_fetch_array($x)) {
    echo "this has been searched";
}
?>