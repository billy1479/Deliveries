<?php
require_once __DIR__."/connect.php";
$data = $conn->query('SELECT * from locations order by Name');
echo "<table class='tableClass'>";
echo "<tr>";
echo "<th>ID</th>";
echo "<th>Name</th>";
echo "<th>Charge</th>";
echo "</tr>";
while ($data && $row=mysqli_fetch_array(($data))) {
    echo "<tr>";
    echo "<td class='rowtd'>".$row['ID']."</td>";
    echo "<td class='rowtd'>".$row['Name']."</td>";
    echo "<td class='rowtd'>£".$row['Charge']."</td>";
    echo "</tr>";
}
echo "</table>";
?>