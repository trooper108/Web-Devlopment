let body = document.getElementById("body1");
body.style.fontFamily = "Arieal,sans-serif";
let nick = document.getElementById("nickname");
let fav = document.getElementById("favorites");
let home = document.getElementById("hometown");

nick.innerHTML = "Rishabh";
fav.innerHTML = `BasketBall,Poetry`;
home.innerHTML = "Kanpur,Uttar Pradesh";
let element = document.querySelectorAll("li");
element.className = "list-style";
let head = document.getElementsByTagName("head");
let style = document.createElement("style");
head.appendChild(style);
let colr = document 
let itemEle = document.createElement("img");
itemEle.src = "./vishal-pal.jpeg";
itemEle.style.width = "200px";
itemEle.style.height = "300px";
let container = document.querySelector(".container");
container.appendChild(itemEle);