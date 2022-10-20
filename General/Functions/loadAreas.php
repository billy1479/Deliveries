<?php
// this loads the area option boxes without the postcodes
require_once __DIR__.'\connect.php';
$data = $conn->query('SELECT ID, Name from locations');
echo "<option value=''>Please select an area...</option>";
while ($data && $row = mysqli_fetch_array($data)) {
    echo "<option value='".$row['ID']."'>".$row['Name']."</option>";
}
?>