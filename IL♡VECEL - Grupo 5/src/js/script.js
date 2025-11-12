const minSlider = document.querySelector(".min-val");
const maxSlider = document.querySelector(".max-val");
const minInput = document.querySelector(".min-input");
const maxInput = document.querySelector(".max-input");
const barra = document.querySelector(".slider-track");

const valorMin = 1000;
const valorMax = 12000;

function actualizarRango() {
  let min = parseInt(minSlider.value);
  let max = parseInt(maxSlider.value);

  if (min > max) [min, max] = [max, min];

  const porcMin = ((min - valorMin) / (valorMax -valorMin)) * 100;
  const porcMax = ((max - valorMin) / (valorMax - valorMin)) * 100;

  barra.style.background = `
    linear-gradient(to right,
      #000 ${porcMin}%,
      #B3D096 ${porcMin}%,
      #B3D096 ${porcMax}%,
      #000 ${porcMax}%
    )`;

  minInput.value = min;
  maxInput.value = max;
}

function actualizarDesdeInput() {
  let min = parseInt(minInput.value) || valorMin;
  let max = parseInt(maxInput.value) || valorMax;

  min = Math.min(Math.max(min, valorMin), valorMax);
  max = Math.min(Math.max(max, valorMin), valorMax);

  minSlider.value = min;
  maxSlider.value = max;

  actualizarRango();
}

[minSlider, maxSlider].forEach(slider =>
  slider.addEventListener("input", actualizarRango)
);

[minInput, maxInput].forEach(input =>
  input.addEventListener("input", actualizarDesdeInput)
);

document.addEventListener("DOMContentLoaded", actualizarRango);
