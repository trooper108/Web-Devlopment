let box = document.getElementsByClassName("task2");
console.log(box);
let btn1 = document.getElementById("btn");
console.log(btn1);
btn1.addEventListener("click",()=>{
    box[2].innerHTML = "Hobbey";

});