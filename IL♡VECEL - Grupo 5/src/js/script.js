//Pagina Inicio


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
      }

      else {
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
      }

      else {
        rangeInput[1].value = minVal + priceGap;
      }
    }

    else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

const form = document.getElementById("filtroForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const precioMin = parseInt(document.getElementById("precioMin").value);
  const precioMax = parseInt(document.getElementById("precioMax").value);

  console.log("Precio mínimo:", precioMin);
  console.log("Precio máximo:", precioMax);

  filtrarProductos(precioMin, precioMax);
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
            <div class="fav">
              <i class="bi bi-star"></i>
            </div>
            
            <img src="${producto.thumbnail}" alt="${producto.title}">

            <div class="info">
              <h3>${producto.title}</h3>
              <p>$${producto.price}</p>
            </div>

            <div class="ofertas">
              <p>32,51% off <br>
                  Efectivo <br>
                  $389.746.67</p>
                    
              <p>27% off <br>
                  Transferencia <br>
                  $358.848.84</p>
            </div>
              
<button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>

          </div>
        `;
      });
    })

    .catch((error) => {
      console.error("Error al obtener productos:", error);
      contenedor.innerHTML = '<p class="problemaProductos">Hubo un problema al cargar los productos</p>';
    });
});

//Agregar al carrito
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

