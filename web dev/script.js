var inputtext = document.getElementById("input");
var submitbtn = document.getElementById("btn");
var ul = document.getElementById("ul");


submitbtn.addEventListener("click",function(){

const li = document.createElement('li');
li.innerHTML = `
<span>${inputtext.value}</span>
<button class="delete-btn">মুছে ফেলুন</button>
`
li.style.border = "3px solid red";
li.style.margin = "3px 0";
ul.appendChild(li);
  
li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });
});