/*const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");

function addTask() {
  let taskValue = inputTask.value;
  if (!taskValue) {
    alert("il faut entrer une tache");
  } else {
   let li = document.createElement("li");
   let span = document.createElement("span");
    li.innerHTML = taskValue;
   taskList.appendChild(li);
    span.innerHTML = "&times;";
    li.appendChild(span);
  }
  inputTask.value = "";
  setTask();
}

btn.addEventListener("click", addTask);
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setTask();
  }
});

inputTask.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        addTask();
    }
});
function setTask() {
  localStorage.setItem("lists", taskList.innerHTML);
}
function loadTask() {
  taskList.innerHTML = localStorage.getItem("lists");
}
loadTask();*/

const humburger=document.querySelector('.humburger');
const navbar=document.querySelector('.navbar');
const barIcon=document.querySelector('.fa-bars');
const xIcon=document.querySelector('.fa-xmark');
humburger.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    barIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
});