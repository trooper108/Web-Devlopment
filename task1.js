let btn = document.getElementById("btn");
console.log(btn);
let para = document.getElementById("para");

let text = para.textContent;

btn.addEventListener("click",() =>{
    para.innerHTML = `Hey, I am Vishal Pal!`
    btn.innerHTML = `clicked`;
});