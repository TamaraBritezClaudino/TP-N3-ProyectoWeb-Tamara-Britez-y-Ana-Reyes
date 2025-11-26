

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.createElement("div");
    lista.id = "listaCarrito";

    const contenedor = document.querySelector(".ch-caja");

    if (contenedor) {
        const total = contenedor.querySelector(".carrito-total");
        contenedor.insertBefore(lista, total);
    }

    mostrarCarrito();
});


function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const lista = document.getElementById("listaCarrito");
    const subtotal = document.getElementById("subtotal");

    if (!lista) return;

    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = "<p>No hay compras realizadas.</p>";
        if (subtotal) subtotal.textContent = "0";
        return;
    }

    carrito.forEach((p, index) => {
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
        btnEliminar.addEventListener("click", () => eliminarCompra(index));

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });

    actualizarSubtotal();
}

function actualizarSubtotal() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const subtotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

    document.getElementById("subtotal").textContent = subtotal;
}

function eliminarCompra(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}


function agregarAlCarrito(id) {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(producto => {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            let existe = carrito.find(p => p.id === producto.id);

            if (existe) {
                existe.cantidad++;
            } else {
                carrito.push({
                    id: producto.id,
                    nombre: producto.title,
                    precio: producto.price,
                    img: producto.thumbnail,
                    cantidad: 1
                });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert("Producto agregado!");
        });
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}
