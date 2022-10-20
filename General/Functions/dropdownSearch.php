<?php
require_once __DIR__.'\connect.php';
$id = $_POST['id'];
$data = $conn->query('SELECT * from postcodes where ID="'.$id.'"');
while ($data && $row=mysqli_fetch_array($data)) {
    echo "<p class='outputP'>".$row['Code']." - £".$row['Charge']."</p>";
}
?>