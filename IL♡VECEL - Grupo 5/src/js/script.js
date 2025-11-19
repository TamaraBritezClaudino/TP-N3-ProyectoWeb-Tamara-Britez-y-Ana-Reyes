//Pagina Inicio
const btnIzq = document.querySelector(".btnIzq"),
  btnDer = document.querySelector(".btnDer"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".sliderSection");

if (btnIzq && btnDer && slider && sliderSection.length > 0) {

  btnIzq.addEventListener("click", e => moveToLeft());
  btnDer.addEventListener("click", e => moveToRight());

  let operation = 0,
    counter = 0,
    widhtImg = 100 / sliderSection.length;

  function moveToRight() {
    if (counter >= sliderSection.length - 1) {
      counter = 0;
      operation = 0;
    } else {
      counter++;
      operation += widhtImg;
    }

    slider.style.transform = `translateX(-${operation}%)`;
  }

  function moveToLeft() {
    if (counter === 0) {
      counter = sliderSection.length - 1;
      operation = widhtImg * counter;
    } else {
      counter--;
      operation -= widhtImg;
    }

    slider.style.transform = `translateX(-${operation}%)`;
  }
}


//Pagina Tienda
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
 range = document.querySelector(".precioContenedor .slider .progress")


let priceGap = 1000;

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

