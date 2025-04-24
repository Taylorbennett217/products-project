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

</html>