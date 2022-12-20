let body = document.querySelector("body");
let inputColor1 = document.getElementById("inputColor1");
let inputColor2 = document.getElementById("inputColor2");
let colorExpression = document.getElementsByTagName("h2")[0];


function chooseBg(){ 
    body.style.background = " linear-gradient(to right, "  + inputColor1.value  + "," + inputColor2.value + ")";

    colorExpression.textContent = body.style.background + ";"
};


inputColor1.addEventListener("input", chooseBg);
inputColor2.addEventListener("input", chooseBg);