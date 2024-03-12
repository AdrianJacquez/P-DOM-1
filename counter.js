const colorInput = document.querySelector("#inputPaleta");
const btnVisualizar = document.querySelector("#btnView");
const mostrarValor = document.querySelector("#valorColor");
mostrarValor.readOnly = true;
const mostrarColor = document.querySelector("#colorView");
mostrarColor.readOnly = true;

btnVisualizar.addEventListener("click", () => {
  const valor = colorInput.value;

  mostrarValor.value = valor;
  console.log(mostrarValor);

  mostrarColor.style.backgroundColor = valor;

  console.log(mostrarColor);
  console.log(valor);
});
