

let miniCircle=document.querySelector("#Mini-circle")
let BigCircle=document.querySelector("#big-circle")

document.addEventListener("mousemove",function(dots){
    miniCircle.style.top=dots.clientY-15+"px"
    miniCircle.style.left=dots.clientX-15+"px"
    BigCircle.style.top=dots.clientY-100+"px"
    BigCircle.style.left=dots.clientX-100+"px"
    


})