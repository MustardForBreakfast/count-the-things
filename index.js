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
  renderCount();
}

/**
 * Define behavior for the "-" button.
 */
function handleMinusClick(e) {
  e.preventDefault();
  subOne();
  renderCount();
}

/**
 * Redraw the count text with the current count value.
 */
function renderCount() {
  const $count = document.getElementById("countDisplay");
  $count.innerText = `${count}`;
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
  renderCount();
  initPlusButton();
  initMinusButton();
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
