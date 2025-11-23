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

            <form>
                <div class="fila">
                    <input type="text" placeholder="Nombre" required>
                    <input type="text" placeholder="Apellido" required>
                    <input type="date" placeholder="fecha de nacimiento" required>
                </div>

                <input type="email" placeholder="E-mail" required>
                <input type="tel" placeholder="Teléfono" required>
                <input type="password" placeholder="Contraseña" required>
                <input type="text" placeholder="Dirección" required>

                <button type="submit" class="btn">Registrate</button>
            </form>
        </div>
    </main>

    <footer class="footer-nuevo-diseno">
        <?php require_once 'includes/footer.php';?>
    </footer>
</body>

</html>