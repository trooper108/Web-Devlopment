let history = document.getElementById("history");
let temple = document.getElementById("temple");
let art = document.getElementById("artwork");
console.log(history);
console.log(temple);
console.log(art);

let hisDiv = document.querySelector(".history");
let temDiv = document.querySelector(".temple");
let artDiv = document.querySelector(".artwork");
console.log(hisDiv);
console.log(temDiv);
console.log(artDiv);

history.addEventListener("click", () => {
  console.log("History Button clicked");
  history.style.borderColor = "rgb(120, 110, 199)";
  temple.style.borderColor = "rgb(32, 12, 114)";
  art.style.borderColor = "rgb(32, 12, 114))";
  hisDiv.style.display = "block";
  temDiv.style.display = "none";
  artDiv.style.display = "none";
});

temple.addEventListener("click", () => {
  console.log("Visions Button clicked");
  history.style.borderColor = "rgb(32, 12, 114)";
  temple.style.borderColor = "rgb(120, 110, 199)";
  art.style.borderColor = "rgb(32, 12, 114)";
  temDiv.style.display = "block";
  hisDiv.style.display = "none";
  artDiv.style.display = "none";
});

art.addEventListener("click", () => {
  console.log("goals Button clicked");
  history.style.borderColor = "rgb(32, 12, 114)";
  temple.style.borderColor = "rgb(32, 12, 114)";
  art.style.borderColor = "rgb(120, 110, 199)";
  hisDiv.style.display = "none";
  temDiv.style.display = "none";
  artDiv.style.display = "block";
});
