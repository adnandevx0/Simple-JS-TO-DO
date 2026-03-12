
const button = document.getElementById("submitbtn");

button.addEventListener("click", function(){
    const inputtext = document.getElementById("inputtext");

    
const text = inputtext.value;

    var ol = document.getElementById("ull");

    const li = document.createElement("li");
    li.innerHTML = `
    ${text} 
    `
    li.classList.add("list-group-item")
    ol.appendChild(li);
    inputtext.value = "";

}) 