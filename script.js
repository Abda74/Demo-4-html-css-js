let color = document.getElementById("color");
let text = document.getElementById("text");
let changeBody = document.querySelector(".body");

color.addEventListener("input",()=>{
    changeBody.style.background = color.value;
    text.value = " ";
})

text.addEventListener("input",()=>{
    changeBody.style.background = text.value;
    color = text.value;
})