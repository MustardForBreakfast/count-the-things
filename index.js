let count = 0;

/**
 * Adds 1 to the global `count` variable.
 * 
 * NOTE: mutates global state!
 */
function addOne(){
  count++;
}

/**
 * Subtracts 1 from the global `count` variable.
 *
 * NOTE: mutates global state!
 */
function subOne(){
  count--;
}

/**
 * Define behavior for the "+" button.
 */
function handlePlusClick(e){
  e.preventDefault();
  addOne();
  render();
}

/**
 * Define behavior for the "-" button.
 */
function handleMinusClick(e) {
  e.preventDefault();
  subOne();
  render();
}

/**
 * Redraw the count text with the current count value.
 */
function renderCount() {
  const $count = document.getElementById("countDisplay");
  $count.innerText = `${count}`;
}

/**
 * Redraw the H1 text with the current count value.
 *
 * ...because I'm five years old.
 */
function renderHeaderText() {
  const defaultText = 'Count the things.';
  const secretText = 'Nice.';
  const $header = document.getElementById("headerText");

  if(count === 69){
    $header.innerText = secretText;
  } else if($header.innerText !== defaultText) {
    $header.innerText = defaultText;
  }
}

function render() {
  renderCount();
  renderHeaderText();
}

/**
 * Initialize the "+" button.
 */
function initPlusButton(){
  const $plus = document.getElementById("plusButton");
  $plus.onclick = handlePlusClick;
}

/**
 * Initialize the "-" button.
 */
function initMinusButton() {
  const $minus = document.getElementById("minusButton");
  $minus.onclick = handleMinusClick;
}

/**
 * Initialize the counting of the things.
 */
function init(){
  render();
  initPlusButton();
  initMinusButton();
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
