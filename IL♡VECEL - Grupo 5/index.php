<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="src/css/style.css">
    <script src="src/js/script.js" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body>
    <header>

        <?php
        session_start();
        if (isset($_SESSION['usuario'])) { ?>
            <a href="#">
                <button><?php echo $_SESSION['usuario']['name']; ?></button>
            </a>
        <?php } else { ?>
            <a href="pages/login.php">
                <button>Iniciar Sesion</button>
            </a>
        <?php } ?>

        <nav>
            <a href="index.php" class="seccion activo">Inicio</a>
            <a href="pages/store.php" class="seccion">Celulares</a>
            <a href="pages/Contact.php" class="seccion">Contactos</a>

            <a href="pages/cart.php">
                <i class="bi bi-cart"></i>
            </a>

            <a href="pages/favorite.php">
                <i class="bi bi-star"></i>
            </a>
        </nav>

        <form action="/busqueda" method="get" class="search-bar">
            <input type="search" id="barra_busqueda" name="q" placeholder="Busca productos...">
            <i class="bi bi-search"></i>
        </form>
    </header>

    <main>
        <div class="contenedorCarrusel">
            <div class="carruseles" id="slider">
                <section class="sliderSection">
                    <img src="src/img/carruselImg1.png" alt="BannerILOVECEL">
                </section>

                <section class="sliderSection">
                    <img src="src/img/carruselImg2.jpg" alt="SegundaImgCarrusel">
                </section>

                <section class="sliderSection">
                    <img src="src/img/carruselImg3.jpg" alt="TerceraImgCarrusel">
                </section>
            </div>

            <i class="bi bi-caret-left-fill btnIzq"></i>
            <i class="bi bi-caret-right-fill btnDer"></i>
        </div>

        <section id="contactos">
            <div class="contactos c1 contacto">
                <i class="bi bi-whatsapp"></i>

                <div>
                    <h2>Whatsapp</h2>
                    <p>xx xxxx xxxx</p>
                </div>
            </div>

            <div class="contactos c2 contacto">
                <i class="bi bi-envelope"></i>
                <div>
                    <h2>Asesoramiento</h2>
                    <p>elpepe@mercadositio.com</p>
                </div>
            </div>

            <div class="contactos c3 contacto">
                <div class="contacto">
                    <i class="bi bi-geo-alt-fill"></i>

                    <div>
                        <h2>Ubicación</h2>
                        <p>Av. jamon con lechuga 799 (1878), Sándwich, Buenos Aires, Argentina</p>
                    </div>
                </div>

                <div class="contacto">
                    <i class="bi bi-clock"></i>

                    <div>
                        <h2>Horarios de atención</h2>
                        <p>Lunes a Viernes de 10:00 a 18hs. Sábados de 10 a 14hs.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="sobreIlovecel">
            <div id="quienesSomos">
                <h1>¿Quienes somos?</h1>
                <p>
                    En IL♡VECEL somos apasionados por la tecnología y la comunicación. Nuestro obejtivo es conectar a las
                    personas a través de los mejores dispositivos móviles del mercado, ofreciendo productos de alta
                    calidad,
                    innovadores y a precios competitivos e accesibles.
                    Con años de experiencia en el sector, nos dedicamos a brindar una experiencia de compra sencilla,
                    confiable
                    y personalizada, adaptándonos a las necesidades de cada cliente.
                    Nos enorgullece ser una empresa comprometida con la satisfacción del cliente, ofreciendo no solo
                    productos,
                    sino también un servicio de soporte y garantía que asegura tu tranquilidad.
                </p>
            </div>


            <div id="historia">
                <img src="src/img/f93fc358d56dc9bb92076b31c3a7e9f380b47f90 (2).png" alt="Celulares">
                <div>
                    <h2>Nuestra historia:</h2>

                    <p>En IL♡VECEL comenzamos en 1976 como una pequeña tienda de celulares con la misión de acercar la
                        tecnología a
                        todos. Con el tiempo, pasando por generaciones en generaciones, hemos crecido ofreciendo los
                        mejores
                        dispositivos y un servicio personalizado, siempre enfocados en la satisfacción de nuestros
                        clientes.
                        Hoy
                        somos un referente confiable en el mundo móvil, acompañándote en cada conexión.
                    </p>
                </div>
            </div>

            <p>Te invitamos a explorar nuestra página, descubrir nuestros productos y conocer todo lo que tenemos para
                ofrecerte. ¡Sigue navegando y encuentra el celular perfecto para ti!
            </p>
        </section>
    </main>

    <footer class="footer-nuevo-diseno">
        <?php require_once 'pages/includes/footer.php'; ?>
    </footer>
</body>

</html>