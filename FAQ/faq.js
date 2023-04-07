let box  = document.getElementsByClassName('box');
let heading = document.getElementsByClassName('heading');
let plus  = document.getElementsByClassName('plus');
let cross  = document.getElementsByClassName('cross');
let content = document.getElementsByClassName('content');
console.log(box);
for(let i = 0 ; i < box.length; i++){
    plus[i].addEventListener('click',()=>{
        console.log("plus clicked");
        plus[i].style.display = "none";
        cross[i].style.display = "inline";
        content[i].style.display = "block";
        heading[i].style.color = "#2082dd";
    })
    cross[i].addEventListener('click',()=>{
        console.log("cross clicked");
        heading[i].style.color = "#000000";
        plus[i].style.display = "inline";
        cross[i].style.display = "none";
        content[i].style.display = "none";
    })
}