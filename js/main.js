let angle = document.querySelector(".angle_arrow")
angle.addEventListener("click", ()=>{
  window.scrollTo({top: 0, behavior: 'smooth'})
})

window.addEventListener("scroll", ()=>{
  let scrolling = window.scrollY
  if(scrolling >= 100){
    angle.style.display = "block";
  }else{
    angle.style.display = "none";
  }
})

let navbar = document.getElementById("nav_bar");
window.addEventListener("scroll", ()=>{
  let scrolling = window.scrollY
  if(scrolling > 100){
    navbar.classList.add("navAnimation")
  }else{
    navbar.classList.remove("navAnimation")
  }
})


let textAni = document.querySelector(".textAni")
let textAniText = textAni.innerHTML
let textAniArr = textAniText.split("")
textAni.innerHTML = ""
let textAnicount = 0;
let isDeleting = false;


function textAniTime(){
    if(textAnicount < textAniText.length){
        textAni.innerHTML += textAniText.charAt(textAnicount)
        textAnicount++
        textAniArr = textAniText.split("")
    }else{
        textAniArr.pop()
        textAni.innerHTML = textAniArr.join("")
        if(textAniArr.length == 0){
            textAnicount = 0
        }
    }
}
setInterval(()=>{
    textAniTime()
},170)