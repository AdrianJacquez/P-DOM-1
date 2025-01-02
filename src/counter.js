const valueMessage = document.querySelector(".valueMessage");
const userNumber = document.querySelector(".userNumber");
const realoadB = document.getElementById("reloadB");
const startB = document.getElementById("startB");
const randomNumber = document.querySelector(".randomNumber");
const capa = document.getElementById("capa");

const darValorRandom = () => {
  const randomNumber = document.querySelector(".randomNumber");
  userNumber.value = "";
  valueMessage.value = "";
  capa.style.translate = "0";

  const valorRandom = Math.floor(Math.random() * 10) + 1;

  setTimeout(() => {
    randomNumber.value = valorRandom;
  }, 500);
};
document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = document.querySelector(".randomNumber");
  const valorRandom = Math.floor(Math.random() * 10) + 1;
  randomNumber.value = valorRandom;
});

userNumber.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const userValue = parseInt(userNumber.value);
    const randomValue = parseInt(randomNumber.value);
    if (userValue === randomValue) {
      valueMessage.value = "¡Acertaste perra!";
      capa.style.translate = "120%";
    } else if (userValue > randomValue) {
      valueMessage.value = "!Ingresa un numero mas bajo¡";
    } else {
      valueMessage.value = "!ingresa un numero mas alto¡";
    }
  }
});

startB.addEventListener("click", () => {
  const userValue = parseInt(userNumber.value);
  const randomValue = parseInt(randomNumber.value);
  if (userValue === randomValue) {
    valueMessage.value = "¡Acertaste perra!";
    capa.style.translate = "120%";
  } else if (userValue > randomValue) {
    valueMessage.value = "!Ingresa un numero mas bajo¡";
  } else {
    valueMessage.value = "!ingresa un numero mas alto¡";
  }
});

realoadB.addEventListener("click", () => {
  darValorRandom();
});
