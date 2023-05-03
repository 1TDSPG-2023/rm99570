const btn = document.getElementById("meu-btn");

btn.addEventListener("click", function(){
    
    let r = 0
    let g = 0;
    let b = 0;

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    //this.setAttribute("style","background-color:rgb("+r+","+g+","+b+")")
    this.setAttribute("style",`background-color:rgb(${r},${g},${b})`)

});

const title = document.querySelector(".tit-sec");
title.addEventListener("click", function(){
    this.setAttribute("style", "font-size: 3rem");
})