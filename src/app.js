/* eslint-disable */
import "bootstrap";
import "./style.css";

let newCardButton = document.querySelector("#newCardButton");
let tenSecNewCard = document.querySelector("#tenSecNewCard");
let cardContainer = document.querySelector("#cardContainer");
let cardHeight = document.querySelector("#cardHeight");
let cardWidth = document.querySelector("#cardWidth");
let tenSecInterval;

function generateCard(initialHeight, initialWidth) {
  let randomCardNumber = Math.floor(Math.random() * 13) + 1;
  let randomCardIcon = Math.floor(Math.random() * 4);
  let topIcon = document.querySelector("#topIcon");
  let bottomIcon = document.querySelector("#bottomIcon");
  let cardNumber = document.querySelector("#cardNumber");
  let icons = ["♦", "♥", "♠", "♣"];
  cardContainer.style.height = initialHeight;
  cardContainer.style.width = initialWidth;

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
      cardNumber.innerHTML = icons[randomCardIcon];
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
  } else {
    topIcon.classList.remove("text-danger");
    bottomIcon.classList.remove("text-danger");
    cardNumber.classList.remove("text-danger");
  }
}

window.onload = function() {
  //write your code here
  generateCard("550px", "400px");
};

newCardButton.addEventListener("click", function() {
  generateCard(cardHeight.value + "px", cardWidth.value + "px");
  clearInterval(tenSecInterval);
});

tenSecNewCard.addEventListener("click", function() {
  tenSecInterval = setInterval(function() {
    generateCard(cardHeight.value + "px", cardWidth.value + "px");
  }, 10000);
});

cardHeight.addEventListener("change", function() {
  cardContainer.style.height = cardHeight.value + "px";
  console.log(cardHeight.value);
});

cardWidth.addEventListener("change", function() {
  cardContainer.style.width = cardWidth.value + "px";
  console.log(cardWidth.value);
});
