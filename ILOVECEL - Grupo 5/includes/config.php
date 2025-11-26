<?php
$conn = mysqli_connect('localhost', 'root', '', 'ilovecel');
if (!$conn) {
    "Fallo de consulta: " . mysqli_connect_error();
    die();
}
