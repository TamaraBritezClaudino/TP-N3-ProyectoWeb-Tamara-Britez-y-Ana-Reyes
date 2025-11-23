<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="../src/css/style.css">
    <script src="../src/js/script.js" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body id="body">
    <header>
        <?php require_once 'includes/header.php';?>
    </header>


    <section id="asideYmain">
        <aside id="contactosAside">
            <div class="contacto">
                <i class="bi bi-whatsapp"></i>

                <div>
                    <h2>Whatsapp</h2>
                    <a href="tel:xx xxxx xxxx">xx xxxx xxxx</a>
                </div>
            </div>

            <div class="contacto">
                <i class="bi bi-envelope"></i>
                <div>
                    <h2>Asesoramiento</h2>
                    <a href="mailto:elpepe@mercadositio.com">elpepe@mercadositio.com</a>
                </div>
            </div>

            <div class="contacto">
                <i class="bi bi-geo-alt-fill"></i>

                <div>
                    <h2>Ubicación</h2>
                    <a href="https://www.google.com/maps/search/Av.+jamon+con+lechuga+799,+S%C3%A1ndwich,+Buenos+Aires,+Argentina/@-34.6542568,-58.4780247,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">Av. jamon con lechuga 799 (1878), Sándwich, Buenos Aires, Argentina</a>
                </div>
            </div>

            <div class="contacto">
                <i class="bi bi-clock"></i>

                <div>
                    <h2>Horarios de atención</h2>
                    <p>Lunes a Viernes de 10:00 a 18hs. Sábados de 10 a 14hs.</p>
                </div>
            </div>
        </aside>
        <main class="main-formulario">
            <div class="formulario">
                <h1>Contacto</h1>
                <p>Envíanos tu consulta o comentario y te responderemos a la brevedad.</p>
                <form>

                    <input type="email" placeholder="Nombre" required>
                    <input type="tel" placeholder="Email" required>
                    <input type="password" placeholder="Telefono" required>

                    <textarea placeholder="Mensaje" name="Mensaje" id="Mensaje" rows="6" ; cols="100"></textarea>

                    <button type="submit" class="btn">Enviar</button>
                </form>
            </div>
        </main>
    </section>

    <footer class="footer-nuevo-diseno">
        <?php require_once 'includes/footer.php';?>
    </footer>
</body>

</html>