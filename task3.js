let btn = document.getElementById("btn");
console.log(btn);
let input = document.getElementById("input-text");
console.log(input);
let msg = document.querySelector(".msg");
let task = document.getElementById("task");
let list = [];
// let i = 0;

btn.addEventListener("click",()=>{
    console.log("button is cliked");
    if(input.value === ""){
        msg.innerHTML = "Task can not be blank";
    }
    else{
        msg.innerHTML = "";
        list.push({
            text: input.value,
        });
        // task[i].innerHTML = `${input.value}`;
        // i++;
        let itemEle = document.createElement("li");
        itemEle.textContent = input.value;
        task.appendChild(itemEle);

        input.value = "";
        
    }
    console.log(list);
});