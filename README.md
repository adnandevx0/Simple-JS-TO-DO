# Simple-JS-TO-DO

<pre>
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <style>
        *{
    margin: 0;
    padding: 0;
}
body{
    background-color: rgb(214, 144, 57);
}
.divxx{
    background-color: antiquewhite;
    min-height: 200px;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 20px;
    padding: 20px;
}
    </style>

    <div class="divxx">
    <h4 class="text-center text-danger"> TO DO </h4>
        <div class="input-group mt-2">
            <span class="input-group-text">></span>
            <input type="text" class="form-control" placeholder="Enter Something" id="inputtext">
            <button class="btn btn-primary" type="submit" id="submitbtn">Button</button>

        </div>
        <div class="mt-3">
            <ol class="list-group list-group-numbered" id="ull">
            </ol>
        </div>

    </div>


    <script>
        
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
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
</pre>
