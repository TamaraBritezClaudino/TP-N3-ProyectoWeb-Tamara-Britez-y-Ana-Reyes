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

function agregarFavorito(id) {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(producto => {
            let favoritos = JSON.parse(localStorage.getItem("favorito")) || [];

            let existe = favoritos.find(p => p.id === producto.id);

            if (!existe) {
                favoritos.push({
                    id: producto.id,
                    nombre: producto.title,
                    precio: producto.price,
                    img: producto.thumbnail
                });

                localStorage.setItem("favorito", JSON.stringify(favoritos));
                alert("Agregado a favoritos!");
            } else {
                alert("Este producto ya está en favoritos.");
            }
        });
}
document.addEventListener("DOMContentLoaded", () => {
  mostrarFavorito();
});

