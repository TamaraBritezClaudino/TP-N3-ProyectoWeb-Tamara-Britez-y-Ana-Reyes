<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda celulares</title>
    <link rel="stylesheet" href="../src/css/style.css">
    <script src="../src/js/script.js" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body id="body">
    <header>
        <?php require_once 'includes/header.php';?>
    </header>

    <section id="asideYmain">
        <aside>
            <h1>Categorias</h1>

            <form id="filtroForm">
                <p>Celulares</p>
                <label>
                    <input type="radio" name="marca" value="Xiaomi"> Xiaomi
                </label>

                <label>
                    <input type="radio" name="marca" value="iPhone"> iPhone
                </label>

                <label>
                    <input type="radio" name="marca" value="Samsung"> Samsung
                </label>

                <label>
                    <input type="radio" name="marca" value="Motorola"> Motorola
                </label>

                <label>
                    <input type="radio" name="marca" value="Infinix"> Infinix
                </label>


                <div class="precioContenedor">
                    <p>Precio</p>

                    <div>
                        <div>
                            <div class="slider">
                                <div class="progress"></div>
                            </div>

                            <div class="range-input">
                                <input type="range" class="range-min" min="0" max="10000" value="2500" step="100">
                                <input type="range" class="range-max" min="0" max="10000" value="7500" step="100">
                            </div>
                        </div>

                        <div class="price-input">
                            <div class="field">
                                <span>Desde$</span>
                                <input type="number" class="input-min" id="precioMin" value="2500">
                            </div>

                            <div class="field">
                                <span>Hasta$</span>
                                <input type="number" class="input-max" id="precioMax" value="7500">
                            </div>
                        </div>
                    </div>
                </div>

                <input type="submit" value="Aplicar">
            </form>
        </aside>

        <main id="mainTienda">
            <div class="tarjeta">
                <div class="fav">
                    <i class="bi bi-star"></i>
                </div>

                <img src="../src/img/celular1.png" alt="CelularImg">


                <div class="info">
                    <h3>Sansung Galaxy A36</h3>
                    <p>$679.659,09</p>
                </div>


                <div class="ofertas">
                    <p>32,51% off <br>
                        Efectivo <br>
                        $389.746.67</p>
                    <p>27% off <br>
                        Transferencia <br>
                        $358.848.84</p>
                </div>

                <button>Agregar al carrito</button>
            </div>
        </main>
    </section>

    <footer class="footer-nuevo-diseno">
        <?php require_once 'includes/footer.php';?>
    </footer>
</body>

</html>