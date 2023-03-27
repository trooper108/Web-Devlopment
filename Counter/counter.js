let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let content = document.querySelector(".counter");
let reset = document.querySelector(".reset");

let counter = 0;

plus.addEventListener("click", () => {
  counter++;
  content.innerHTML = counter;
});


minus.addEventListener("click", () => {
  counter--;
  content.innerHTML = counter;
});


reset.addEventListener("click", () => {
  counter = 0;
  content.innerHTML = counter;
});
