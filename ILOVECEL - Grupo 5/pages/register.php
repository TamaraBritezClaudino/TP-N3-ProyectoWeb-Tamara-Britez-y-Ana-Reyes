<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda celulares</title>
    <link rel="stylesheet" href="../src/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body id="body">
    <header class="logito">
        <a href="../index.php">
            <h1 class="logo">IL♡VECEL</h1>
        </a>
    </header>

    <main class="main-formulario">
        <div class="formulario">
            <h2>Registrate</h2>
            <p>Llena el formulario.</p>

            <form method="post">
                <div class="fila">
                    <input type="text" placeholder="Nombre" name="name" required>
                    <input type="text" placeholder="Apellido" name="subname" required>
                    <input type="date" placeholder="fecha de nacimiento" name="date" required>
                </div>

                <input type="email" placeholder="E-mail" name="email" required>
                <input type="tel" placeholder="Teléfono" name="tel" required>
                <input type="password" placeholder="Contraseña" name="password" required>
                <input type="text" placeholder="Dirección" name="direction" required>

                <button type="submit" class="btn" name="submit">Registrate</button>
            </form>
        </div>
    </main>

    <footer class="footer-nuevo-diseno">
        <?php require_once "footer.php"; ?>
    </footer>
</body>

</html>

<?php
require_once "../includes/config.php";
if (isset($_POST['submit'])) {
    $fecha_sql = date('Y-m-d', strtotime($_POST['date']));
    $sis = "INSERT INTO usuarios VALUES (null , '" . $_POST['name'] . "' , '" . $_POST['subname'] . "', '" . $_POST['email'] . "'
    , '" . $_POST['tel'] . "', '" . md5($_POST['password']) . "','" . $_POST['direction'] . "', '" . $fecha_sql . "') ";
    $res = mysqli_query($conn, $sis);
    if (!$res) {
        "Fallo de consulta: " . mysqli_error($conn);
        die();
    }
    Header("Location:login.php");
}
?>