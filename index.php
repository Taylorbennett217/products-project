<?php
require_once("initialize.php")
?>
<html>
<h1>Products</h1>
<ul name="products-list">
    <?php
    $sql = "SELECT product_name, list_price, inventory_count FROM products";
    $result_set = mysqli_query($connection, $sql);

    while ($result = mysqli_fetch_assoc($result_set)) {
        echo "<li>";
        echo $result["product_name"];
        echo " ";
        echo sprintf('%.2f', $result["list_price"]);
        echo " ";
        echo $result["inventory_count"];
        echo "</li>";
    }
    ?>
</ul>

<form action="create.php" method="POST">
    <label for="product">Product Name:</label>
    <input name="product" type="text" min="5" max="50">

    <label for="price">Price:</label>
    <input name="price" type="number" min="0.00" max="100.00" step="0.01">

    <label for="Inventory Count">Inventory Count:</label>
    <input name="inventoryCount" type="number" min="0" max="100">

    <input type="submit">
</form>


</html>