const show = document.querySelector(".submit");
const sh = document.querySelector(".sent");

show.addEventListener("click", ()=>{
    sh.classList.add("showSent");
})