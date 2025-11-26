<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro - ILVECEL</title>
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
        <section class="login-contenedor">

            <div class="login-caja-principal">
                <h1 class="logo-login">IL♡VECEL</h1>
                <form class="login-formulario" method="post">

                    <label for="email-login">Correo electronico</label>
                    <input type="email" id="email-login" placeholder="E-mail" name="email" required>

                    <label for="password-login">Contraseña</label>
                    <input type="password" id="password-login" placeholder="Contraseña" name="password" required>

                    <button type="submit" class="btn-ingresar" name="submit">Ingresar</button>
                </form>
            </div>

            <div class="login-caja-secundaria">
                <p>¿No tenes cuenta? <a href="register.php" class="link-registro">Registrate</a></p>
            </div>

            <div class="login-caja-secundaria google-login">
                <p>O ingresa con Google</p>
                <img src="../src/img/logoGoogle.png" alt="">
            </div>

        </section>
    </main>
    <footer class="footer-nuevo-diseno">
        <?php require_once 'footer.php'; ?>
    </footer>
</body>

</html>

<?php
require_once "../includes/config.php";

if (isset($_POST['submit'])) {
    if (isset($_POST['email']) && isset($_POST['password'])) {
        $sql = "SELECT * FROM usuarios WHERE email = '" . $_POST['email'] . "' AND password = '" . md5($_POST['password']) . "'";
        $query = mysqli_query($conn, $sql);
        if (!$query) {
            echo "Fallo de consulta: " . mysqli_error($conn);
            die();
        }
        $filas = mysqli_num_rows($query);

        if ($filas == 1) {
            session_start();
            $_SESSION['usuario'] = mysqli_fetch_assoc($query);

            // Redirigir al Home
            header("Location: ../index.php");
            exit;
        } else {
            // Usuario incorrecto
            echo "<script>alert('Email o contraseña incorrectos'); window.location='login.php';</script>";
            exit;
        }
    }
}
?>