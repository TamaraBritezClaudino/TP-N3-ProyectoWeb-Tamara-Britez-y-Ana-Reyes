//Pagina Tienda
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".precioContenedor .slider .progress");

let priceGap = 50;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

//API
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor");

  fetch("https://dummyjson.com/products/category/smartphones")
    .then((response) => response.json())

    .then((data) => {
      data.products.forEach((producto) => {
        contenedor.innerHTML += `
           <div class="tarjeta">
        <button onclick="agregarFavorito(${producto.id})"class="fav"><i class="bi bi-star"></i></button>
            
            <img src="${producto.thumbnail}" alt="${producto.title}">

            <div class="info">
              <h3>${producto.title}</h3>
              <p>$${producto.price}</p>
            </div>

            <div class="ofertas">
              <p>32,51% off <br>
                  Efectivo</p>
                    
              <p>27% off <br>
                  Transferencia</p>
            </div>
              
<button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>

          </div>
        `;
      });
    })

    .catch((error) => {
      console.error("Error al obtener productos:", error);
      contenedor.innerHTML =
        '<p class="problemaProductos">Hubo un problema al cargar los productos</p>';
    });
});

//Aplicar filtros
const form = document.getElementById("filtroForm");
const contenedor = document.getElementById("contenedor");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const marcaSeleccionada = document.querySelector(
    'input[name="marca"]:checked'
  );
  const marca = marcaSeleccionada
    ? marcaSeleccionada.value.toLowerCase()
    : null;

  const precioMin = parseInt(document.getElementById("precioMin").value);
  const precioMax = parseInt(document.getElementById("precioMax").value);

  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => {
      let filtrados = data.products;

      if (marca) {
        filtrados = filtrados.filter((p) =>
          p.brand.toLowerCase().includes(marca)
        );
      }

      filtrados = filtrados.filter(
        (p) => p.price >= precioMin && p.price <= precioMax
      );

      mostrarProductos(filtrados);
    });
});

function mostrarProductos(productos) {
  contenedor.innerHTML = "";

  if (productos.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos</p>";
    return;
  }

  productos.forEach((producto) => {
    contenedor.innerHTML += `
      <div class="tarjeta">
        <button onclick="agregarFavorito(${producto.id})"class="fav"><i class="bi bi-star"></i></button>
        <img src="${producto.thumbnail}" alt="${producto.title}">

        <div class="info">
          <h3>${producto.title}</h3>
          <p>$${producto.price}</p>
        </div>

        <div class="ofertas">
          <p>32,51% off <br>
              Efectivo</p>
                
          <p>27% off <br>
              Transferencia</p>
        </div>

        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      </div>
    `;
  });
}

//Agregar al carrito
function agregarAlCarrito(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((producto) => {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      let existe = carrito.find((p) => p.id === producto.id);

      if (existe) {
        existe.cantidad++;
      } else {
        carrito.push({
          id: producto.id,
          nombre: producto.title,
          precio: producto.price,
          img: producto.thumbnail,
          cantidad: 1,
        });
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto agregado!");
    });
}


//Agregar a favorito
function agregarFavorito(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((producto) => {
      let favorito = JSON.parse(localStorage.getItem("favorito")) || [];

      let existe = favorito.find((p) => p.id === producto.id);

      if (existe) {
        existe.cantidad++;
      } else {
        favorito.push({
          id: producto.id,
          nombre: producto.title,
          precio: producto.price,
          img: producto.thumbnail,
          cantidad: 1,
        });
      }

      localStorage.setItem("favorito", JSON.stringify(favorito));
      alert("Producto agregado!");
    });
}
