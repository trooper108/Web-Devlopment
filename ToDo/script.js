let input = document.getElementById("input-text");
let btn = document.getElementById("btn");
console.log(input);
console.log(btn);
let tasklist = document.getElementById("tasklist");
console.log(tasklist);
let i = 1;
let edit;
let del;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Button is clicked");

  if (input.value === "") {
    alert("Input cannot be Empty");
    return;
  }
  let element = document.createElement("div");
  let task = document.createElement("input");
  element.appendChild(task);
  task.type = "text";
  task.value = input.value;
  task.setAttribute("readonly", "readonly");
  task.style.backgroundColor = "#8359fa";
  tasklist.appendChild(element);
  input.value = "";
  edit = document.createElement("i");
  del = document.createElement("i");
  edit.className = "fa-solid fa-pen-to-square";
  del.className = "fa-solid fa-trash";
  element.appendChild(del);
  element.appendChild(edit);
  del.addEventListener("click", () => {
    tasklist.removeChild(element);
  });
  let flag = true;
  edit.addEventListener("click", () => {
    if (flag === true) {
      task.removeAttribute("readonly");
      task.style.backgroundColor = "#1a193f";
      flag = false;
    } else {
      task.style.backgroundColor = "#8359fa";
      task.setAttribute("readonly", "readonly");
      flag = true;
    }
  });
});
