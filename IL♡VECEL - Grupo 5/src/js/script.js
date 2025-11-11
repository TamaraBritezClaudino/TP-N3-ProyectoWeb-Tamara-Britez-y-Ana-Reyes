const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");

const precioInputMin = document.querySelector(".min-input");
const precioInputMax = document.querySelector(".max-input");

const rango = document.querySelector(".slider-track");

const valorMinSlider = 1000;
const valorMaxSlider = 12000;

function actualizarRango() { //Color de la barra
  const val1 = parseInt(minVal.value);
  const val2 = parseInt(maxVal.value);
  const minActual = Math.min(val1, val2);
  const maxActual = Math.max(val1, val2);

  const percentMin = ((minActual - valorMinSlider) / (valorMaxSlider - valorMinSlider)) * 100;
  const percentMax = ((maxActual - valorMinSlider) / (valorMaxSlider - valorMinSlider)) * 100;

  rango.style.background = `linear-gradient(to right,
    #000 ${percentMin}%,
    #B3D096 ${percentMin}%,
    #B3D096 ${percentMax}%,
    #000 ${percentMax}%)`;

  precioInputMin.value = minActual;
  precioInputMax.value = maxActual;
}

minVal.addEventListener("input", actualizarRango);
maxVal.addEventListener("input", actualizarRango);

precioInputMin.addEventListener("input", () => {
  let val = parseInt(precioInputMin.value);

  if (isNaN(val)) return;

  val = Math.max(valorMinSlider, Math.min(val, valorMaxSlider));

  minVal.value = val;

  actualizarRango();
});

precioInputMax.addEventListener("input", () => {
  let val = parseInt(precioInputMax.value);

  if (isNaN(val)) return;

  val = Math.max(valorMinSlider, Math.min(val, valorMaxSlider));

  maxVal.value = val;

  actualizarRango();
});

document.addEventListener("DOMContentLoaded", actualizarRango);