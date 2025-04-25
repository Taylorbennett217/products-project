<html>
<?php
require_once("initialize.php");

$product_name = $_POST["product"];
$list_price = $_POST["price"];

$sql = "INSERT INTO eccommerce (product, price) values (\"$product_name\",\"$list_price\")";

$result = mysqli_query($connection, $sql);

if ($result) {
    echo "<h2>Product Created!</h2>";
} else {
    echo "<h3>error! Testimonial not created.</h3>";
}
?>

<a href="index.php">Return to Testimonials</a>

</html>