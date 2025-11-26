function mostrarFavorito() {
  const favorito = JSON.parse(localStorage.getItem("favorito")) || [];
  const lista = document.getElementById("listaFavorito");

  if (!lista) return;

  lista.innerHTML = "";

  if (favorito.length === 0) {
    lista.innerHTML = "<p>No hay productos en favoritos.</p>";
    return;
  }

  favorito.forEach((p, index) => {
    const item = document.createElement("div");
    item.classList.add("item-compra");

    item.innerHTML = `
            <div>
                <img src="${p.img}" class="item-img">
                
                <div class="item-info">
                    <h3>${p.nombre}</h3>
                    <p>Precio: $${p.precio}</p>
                </div>
            </div>
        `;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.innerHTML = '<i class="bi bi-star-fill"></i>';
    btnEliminar.addEventListener("click", () => eliminarFavorito(index));

    const btnCarrito = document.createElement("button");
    btnCarrito.classList.add("btn-carrito-fav");
    btnCarrito.innerHTML = '<i class="bi bi-cart-plus"></i>';
    btnCarrito.addEventListener("click", () => agregarFavoritoAlCarrito(p));

    const botones = document.createElement("div");
    botones.classList.add("grupo-botones");
    botones.appendChild(btnEliminar);
    botones.appendChild(btnCarrito);

    item.appendChild(botones);
    lista.appendChild(item);
  });
}

function eliminarFavorito(index) {
  let favorito = JSON.parse(localStorage.getItem("favorito")) || [];
  favorito.splice(index, 1);
  localStorage.setItem("favorito", JSON.stringify(favorito));
  mostrarFavorito();
}
document.addEventListener("DOMContentLoaded", () => {
  mostrarFavorito();
});

function agregarFavoritoAlCarrito(productoFav) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let existe = carrito.find((p) => p.id === productoFav.id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({
      id: productoFav.id,
      nombre: productoFav.nombre,
      precio: productoFav.precio,
      img: productoFav.img,
      cantidad: 1,
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Agregado al carrito desde favoritos!");
  mostrarCarrito();
}
