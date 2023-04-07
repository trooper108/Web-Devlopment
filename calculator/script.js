let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');
console.log(input);
console.log(button);
let string = "";
for(let i = 0 ; i < button.length ;i++){
    button[i].addEventListener("click",(e)=>{
        if(e.target.innerHTML === "="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML ==="AC"){
            string = 0;
            input.value = 0;
        }
        else if(e.target.innerHTML === "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string+=e.target.innerHTML;
            input.value = string;
        }
    });
};