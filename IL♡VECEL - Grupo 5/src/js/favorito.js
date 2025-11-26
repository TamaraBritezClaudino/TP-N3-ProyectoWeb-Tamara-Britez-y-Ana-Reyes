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
                    <p>Cantidad: ${p.cantidad}</p>
                </div>
            </div>
        `;

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.textContent = "X";
        btnEliminar.addEventListener("click", () => eliminarFavorito(index));

        item.appendChild(btnEliminar);
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
