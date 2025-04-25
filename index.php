<?php
require_once("initialize.php")
?>
<html>
<h1>Products</h1>
<ul name="products-list">
    <?php
    $sql = "SELECT product_name FROM products";
    $result_set = mysqli_query($connection, $sql);

    while ($result = mysqli_fetch_assoc($result_set)) {
        echo "<li>";
        echo $result["product_name"];
        echo "</li>";
    }
    ?>
</ul>

<form action="create.php" method="POST">
    <label for="">Product Name:</label>
    <input name="Product" type="text">

    <label for="price">Price:</label>
    <input name="price" type="number" min="0" max="100,000,000">

    <input type="submit">
</form>


</html>