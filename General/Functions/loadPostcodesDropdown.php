<?php
require_once __DIR__.'\connect.php';
// This loads the postcodes, ordered by area in the dropdown boxes
$data = $conn->query('SELECT * from postcodes ORDER BY Location ASC');
echo "<option value=''>Please select a postcode...</option>";
while ($data && $row=mysqli_fetch_array($data)) {
    echo "<option value='".$row['ID']."'>".$row['Location']." - ".$row['Code']."</option>";
}
?>