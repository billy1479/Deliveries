<?php
require_once __DIR__.'\connect.php';
$area = $_POST['area'];
$postcode = $_POST['postcode'];
$charge = $_POST['charge'];

$x = $conn->query('SELECT Name, Charge from locations where ID="'.$area.'"');
while ($x && $row=mysqli_fetch_array($x)) {
    $area = $row['Name'];
    if ($charge == '') {
        $charge = $row['Charge'];
    }
}

$sql = $conn->prepare('INSERT INTO postcodes (Code, Location, Charge) VALUES (?,?,?)');
$sql->bind_param('sss', $postcode, $area, $charge);
$sql->execute();
$conn->close();
?>