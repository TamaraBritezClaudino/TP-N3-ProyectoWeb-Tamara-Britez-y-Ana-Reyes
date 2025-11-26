<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="../src/css/style.css">
    <script src="../src/js/carrito.js" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body id="body">
    <header>
        <?php require_once 'header.php'; ?>
    </header>

    <main class="main-ch">
        <section class="ch-contenedor">
            <div class="ch-caja">
                <div>
                    <h2>Historial de compras</h2>
                    <hr>
                    <div id="listaCarrito"></div> 
                </div>

                <div class="carrito-total">
                    <h3>SUBTOTAL: <span id="subtotal">0</span> $</h3>
                    <button id="abrirModal" class="btn-comprar" onclick="vaciarCarrito()">REALIZAR PEDIDO</button>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer-nuevo-diseno">
        <?php require_once 'footer.php'; ?>
    </footer>
</body>

</html>