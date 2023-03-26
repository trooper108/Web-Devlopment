let div = document.getElementById("div1");
console.log(div);
let isSquare = true;

div.addEventListener("click", ()=>{
    console.log("div clicked");
    if(isSquare){
        // console.log("if")
        div.style.borderRadius = "50%";
        isSquare = false;
    }
    else{
        // console.log("else")
        div.style.borderRadius = "0%";
        isSquare = true;
    }
});