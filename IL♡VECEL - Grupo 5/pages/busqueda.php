<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda celulares</title>
    <link rel="stylesheet" href="../src/css/style.css">
    <script src="../src/js/carrito.js" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body id="body">
    <header>
        <?php require_once 'header.php'; ?>
    </header>
    <section id="asideYmain">
        <aside>
            <h1>Categorias</h1>

            <form id="filtroForm">
                <p>Celulares</p>
                <label>
                    <input type="radio" name="marca" value="Samsung"> Samsung
                </label>

                <label>
                    <input type="radio" name="marca" value="iPhone"> iPhone
                </label>

                <label>
                    <input type="radio" name="marca" value="Oppo"> Oppo
                </label>

                <label>
                    <input type="radio" name="marca" value="Realme"> Realme
                </label>

                <label>
                    <input type="radio" name="marca" value="Vivo"> Vivo
                </label>


                <div class="precioContenedor">
                    <p>Precio</p>

                    <div>
                        <div>
                            <div class="slider">
                                <div class="progress"></div>
                            </div>

                            <div class="range-input">
                                <input type="range" class="range-min" min="0" max="600" value="100" step="10">
                                <input type="range" class="range-max" min="0" max="600" value="500" step="10">
                            </div>
                        </div>

                        <div class="price-input">
                            <div class="field">
                                <span>Desde$</span>
                                <input type="number" class="input-min" id="precioMin" value="100">
                            </div>

                            <div class="field">
                                <span>Hasta$</span>
                                <input type="number" class="input-max" id="precioMax" value="500">
                            </div>
                        </div>
                    </div>
                </div>

                <input type="submit" value="Aplicar">
            </form>
        </aside>
        <?php
        if (isset($_GET['busqueda'])) {
            $sql = "SELECT*FROM celulares WHERE titulo LIKE '%" . $_GET['busqueda'] . "%'";
            $res = mysqli_query($conn, $sql);
            if (!$res) {
                die(); //hacen una redireccion o una alerta que diga "no se encontro la busqueda"
            }
            $celulares = mysqli_fetch_all($res, MYSQLI_ASSOC);
        }
        ?>
        <main id="mainTienda">

            <div id="contenedor">
                <?php foreach ($celulares as $celular) { ?>
                    <div class="tarjeta">
                        <div class="fav">
                            <i class="bi bi-star"></i>
                        </div>

                        <img src="<?php echo $celular['thumbnail']; ?>" alt="<?php echo $celular['titulo']; ?>">

                        <div class="info">
                            <h3><?php echo $celular['titulo'] ?></h3>
                            <p><?php echo $celular['precio'] ?></p>
                        </div>

                        <div class="ofertas">
                            <p>32,51% off <br>
                                Efectivo <br>
                                $389.746.67</p>

                            <p>27% off <br>
                                Transferencia <br>
                                $358.848.84</p>
                        </div>
                        
<button onclick="agregarAlCarrito(<?php echo $celular['api_id']; ?>)">Agregar al carrito</button>

                    </div>
                <?php } ?>
            </div>
        </main>

    </section>

    <footer class="footer-nuevo-diseno">
        <?php require_once 'footer.php'; ?>
    </footer>
</body>

</html>