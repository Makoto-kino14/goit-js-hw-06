let counterValue = 0;
const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const displayedValue = document.querySelector("#value");

const countMinus = function() {
  counterValue -= 1;
  displayedValue.textContent = counterValue;
};

const countPlus = function() {
  counterValue += 1;
  displayedValue.textContent = counterValue;
};

decr.addEventListener("click", countMinus);
incr.addEventListener("click", countPlus);