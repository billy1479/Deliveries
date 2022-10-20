<!-- this loads the postcodes in table format for the main page -->
<?php
require_once __DIR__."/connect.php";
$data = $conn->query('SELECT * from postcodes order by ID asc');
echo "<table class='tableClass'>";
echo "<tr>";
echo "<th>ID</th>";
echo "<th>Postcode</th>";
echo "<th>Location</th>";
echo "<th>Charge</th>";
echo "</tr>";
while ($data && $row=mysqli_fetch_array($data)) {
    echo "<tr>";
    echo "<td class='rowtd'>".$row['ID']."</td>";
    echo "<td class='rowtd'>".$row['Code']."</td>";
    echo "<td class='rowtd'>".$row['Location']."</td>";
    echo "<td class='rowtd'>".$row['Charge']."</td>";
    echo "</tr>";
}
echo "</table>";
?>