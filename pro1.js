onload = namee();
function namee(){ 
    let name = prompt("ENTER YOUR NAME");
    document.getElementById("greets").innerHTML = name+"❤️";
}
let tym = new Date();
let x= tym.getHours();
if(x>=0 && x<=11){
    document.getElementById("greet").innerHTML="good morning,";
}
else if (x>=12 && x<=15){
    document.getElementById("greet").innerHTML="good afternoon,";
}
else{
    document.getElementById("greet").innerHTML= "good evening,";
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 435) {
     
    document.getElementById("mainname").innerHTML="";
    document.getElementById("santhosh").innerHTML="";
    
  } else {
     
    document.getElementById("mainname").innerHTML="hey, i'am";
    document.getElementById("santhosh").innerHTML="santhosh";
  }
}


const observer= new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
            else{
                entry.target.classList.remove('show');
            }
});
});

const hiddenElements = document.querySelectorAll(".hiddenn");
hiddenElements.forEach((el) => observer.observe(el));

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["art","hard" ,"fun","love", "a journey","an observation" ];
const typingDelay = 200;
const erasingDelay = 200;
const newTextDelay = 200;  
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {  
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

