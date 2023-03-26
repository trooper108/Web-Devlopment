let open = document.getElementById("open");
let close = document.getElementById("close");
let content = document.querySelector(".content");
console.log(open);
console.log(close);
open.addEventListener("click",()=>{
    content.style.display = "flex";
});

close.addEventListener("click",()=>{
    content.style.display = "none";
});