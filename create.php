<html>
<?php
require_once("initialize.php");

$product_name = $_POST["product"];
$list_price = $_POST["price"];
$inventory_count = $_POST["inventoryCount"];

$sql = "INSERT INTO products (product_name, list_price, inventory_count) values (\"$product_name\",\"$list_price\" ,\"$inventory_count\")";

$result = mysqli_query($connection, $sql);

if ($result) {
    echo "<h2>Product Created!</h2>";
} else {
    echo "<h3>error! Product not created.</h3>";
}
?>

<a href="index.php">Return to Products</a>

</html>