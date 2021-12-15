


//let btn =document.createElement ("button");
//btn.innerHTML = "displayPopulation";
//document.body.appendChild(btn);
//button.onclick = displayPopulation

import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

const button = document.createElement('button')
const text = document.createTextNode('Show Population')
button.appendChild(text);
button.onclick = displayPopulation;
document.body.appendChild(button);

//createListOfFruits(fruits);

const x = document.querySelector("#clickMe");
const y = document.querySelector("#hovering");

x.addEventListener("click", respondClick);
y.addEventListener("mouseover", respondMouseOver);
y.addEventListener("mouseout", respondMouseOut);

function respondMouseOver() {
  document.querySelector("#effect").innerHTML += "MouseOver Event" + "<br>";
}

function respondMouseOut() {
  document.querySelector("#effect").innerHTML += "MouseOut Event" + "<br>";
}

function respondClick() {
  document.querySelector("#effect").innerHTML += "Click Event" + "<br>";
}


// remove part

document
  .querySelector("#remove-handler")
  .addEventListener("mousemove", randomNumber);

function randomNumber() {
  document.querySelector("#random-number").innerHTML = Math.random();
}

document
  .querySelector("#remove-handler")
  .addEventListener("click", removeEvent );

function removeEvent () {
    document.querySelector("#remove-handler").removeEventListener ("mousemove", randomNumber)
}