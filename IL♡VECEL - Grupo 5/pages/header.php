<?php session_start();
?>
<?php if (isset($_SESSION['usuario'])) { ?>
    <a class="btnUsuario" href="#">
        <button><i class="bi bi-person-circle"></i>
            <?php echo $_SESSION['usuario']['name']; ?>
        </button>
    </a>
<?php } else { ?>
    <a class="btnUsuario" href="login.php">
        <button>
            <i class="bi bi-box-arrow-in-right"></i> Iniciar Sesion
        </button>
    </a>
<?php } ?>

<input type="checkbox" id="menu_input" class="nav_input">

<label for="menu_input" class="nav_toogle"></label>

<ul class="nav_list">
    <li class="nav_item">
        <a href="../index.php" class="seccion">Inicio</a>
    </li>

    <li class="nav_item">
        <a href="store.php" class="seccion">Celulares</a>
    </li>

    <li class="nav_item">
        <a href="Contact.php" class="seccion">Contactos</a>
    </li>

    <li class="nav_item">
        <a href="cart.php">
            <i class="bi bi-cart"></i>
        </a>
    </li>

    <li class="nav_item">
        <a href="favorite.php">
            <i class="bi bi-star"></i>
        </a>
    </li>
</ul>

<form method="post" class="search-bar">
    <button type="submit" name="submit" id="buscar">Buscar</button>
    <input type="search" id="barra_busqueda" name="busqueda" placeholder="Busca productos...">
    <i class="bi bi-search"></i>
</form>

<?php
   require_once __DIR__ . "/../includes/config.php";

   if (isset($_POST['submit'])) {
    $search = $_POST['busqueda'];
    header("Location: busqueda.php?busqueda=" . urlencode($search));
}
?>