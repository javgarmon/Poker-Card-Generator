/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Declaración de funciones para generar palos y números aleatorios
  function randomPalo() {
    const palos = ["♦", "♥", "♠", "♣"];
    let indexPalo = Math.floor(Math.random() * palos.length);
    return palos[indexPalo];
  }

  function randomNumber() {
    const number = ["A", "2", "3", "4", "5", "6", "8", "9", "J", "Q", "K"];
    let indexNumber = Math.floor(Math.random() * number.length);
    return number[indexNumber];
  }

  //Gardamos las funciones en un espacio de memoria
  let generarPalo = randomPalo();
  let generarNumero = randomNumber();

  //Selección de elementos del html
  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  let numero = document.querySelector(".numbers");

  //Incrustar las variables en el html (imprimir)
  top.innerHTML = generarPalo;
  bottom.innerHTML = generarPalo;
  numero.innerHTML = generarNumero;

  //Codicionales para asignar color a los palos
  if (top.innerHTML === "♦" || top.innerHTML === "♥") {
    top.style.color = "red";
  } else {
    top.style.color = "black";
  }

  if (bottom.innerHTML === "♦" || bottom.innerHTML === "♥") {
    bottom.style.color = "red";
  } else {
    bottom.style.color = "black";
  }
};

console.log("Hello Rigo from the console!");

//Dar funcionalidad al botón "Change card"
// let changeCard = document.getElementById("btn1");
// changeCard.addEventListener("click", _ => {
//   location.reload;
// });

//CountDown Timer
