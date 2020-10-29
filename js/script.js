const englishText = document.querySelectorAll('.en');
const russionText = document.querySelectorAll('.ru');
const engMode = document.querySelector(".lang-eng");
const ruMode = document.querySelector(".lang-ru");
const hintBlock = document.querySelector(".hint-block");
const hint = document.querySelector("#hint")

let animationState = localStorage.getItem("animationState");
localStorage.setItem("animationState", 1)

if(animationState != 1){
    if(screen.width > 640){
        hint.style.display = "block"
        setTimeout(function(){
            hintBlock.style.display = "block"
        },350);
        setTimeout(function(){
            hintBlock.style.display = "none"
        },12000)
    } else if(screen.width <= 640){
        hint.style.display = "block"
        setTimeout(function(){
            hintBlock.style.display = "block"
        },350);
        setTimeout(function(){
            hintBlock.style.display = "none"
        },5500)
    }
} 

document.querySelector("#mode").addEventListener('change', async function() {
    if(this.checked) {
      engMode.classList.remove("active");
      ruMode.classList.add("active");
      for (let text of englishText){
        text.style.display = "none";
        }
      for (let text of russionText){
            if(text.parentElement.className === "right-side"){
                text.style.display = "block";
            } else {
                text.style.display = "inline-block";
            }
          }
    } else {
    ruMode.classList.remove("active");
    engMode.classList.add("active");
    for (let text of englishText){
        if(text.parentElement.className === "right-side"){
            text.style.display = "block";
          } else {
            text.style.display = "inline-block";
          }
      }
    for (let text of russionText){
        text.style.display = "none";
      }
    }
  });

