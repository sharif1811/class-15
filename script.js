let bangla = document.querySelector("#bangla");
let english = document.querySelector("#english");
bangla.addEventListener("input",function (){
    let bangle = bangla.value;
    if(100<bangla.value || 0>bangla.value){
        bangla.style.background="red";
        alert("apner value tik koren")
    }
    else{
        bangla.style.background = "";
    }
})
english.addEventListener("input",function(){
    let england = english.value;
    if(100<england|| 0>england){
        english.classList.add("sharif")
    }
    else{
        english.classList.remove("sharif")
    }
})