/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomCardNumber = Math.floor(Math.random() * 13) + 1;
  let randomCardIcon = Math.floor(Math.random() * 4);
  let topIcon = document.querySelector("#topIcon");
  let bottomIcon = document.querySelector("#bottomIcon");
  let cardNumber = document.querySelector("#cardNumber");
  let icons = ["♦", "♥", "♠", "♣"];

  //Assing the Top Icon and Bottom Icon character value
  topIcon.innerHTML = icons[randomCardIcon];
  bottomIcon.innerHTML = icons[randomCardIcon];

  /**********
  Assigns the correct value to the card number
  if randomCardNumber is 13 the value will be K
  if randomCardNumber is 12 the value will be Q
  if randomCardNumber is 11 the value will be J
  if randomCardNumber is 1 the value will be ♠
  otherwise it will print the value of randomCardNumber
  ***********/
  switch (randomCardNumber) {
    case 13:
      cardNumber.innerHTML = "K";
      break;
    case 12:
      cardNumber.innerHTML = "Q";
      break;
    case 11:
      cardNumber.innerHTML = "J";
      break;
    case 1:
      cardNumber.innerHTML = "♠";
      break;
    default:
      cardNumber.innerHTML = randomCardNumber;
      break;
  }

  /*********
   Assigns the class text-danger if the icon is "♦" or "♥"
   based on the value of randomCardIcon
   *********/

  if (randomCardIcon === 0 || randomCardIcon === 1) {
    topIcon.classList.add("text-danger");
    bottomIcon.classList.add("text-danger");
    cardNumber.classList.add("text-danger");
  }
};
