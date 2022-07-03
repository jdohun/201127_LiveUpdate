$("body").append("<div id='initial'></div>")
  .append("<div id='value'></div>");
let check = document.querySelector("body").firstElementChild;
let initial = 50000;
document.getElementById("initial").innerHTML=`${initial}`;

function Check(){
  let randomValue = Math.random()*200 - 100;

  document.getElementById("value").innerHTML=`${randomValue}`;
  document.getElementById("initial").innerHTML=`${initial + randomValue}`;

  initial = initial + randomValue;

  if(randomValue > 0){
    if($("#initial").hasClass("increase")){
    }
    else{
      check.classList.toggle("increase");
      check.nextElementSibling.classList.toggle("increase");
    }

    if($("#initial").hasClass("decrease")){
      check.classList.toggle("decrease");
      check.nextElementSibling.classList.toggle("decrease");
    }
  }
  else if(randomValue < 0){
    if($("#initial").hasClass("decrease")){
    }
    else{
      check.classList.toggle("decrease");
      check.nextElementSibling.classList.toggle("decrease");
    }

    if($("#initial").hasClass("increase")){
      check.classList.toggle("increase");
      check.nextElementSibling.classList.toggle("increase");
    }
  }
}

Check();
setInterval(Check,3000)
