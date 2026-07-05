const btn = document.getElementById("cir-btn");
const lamp = document.getElementById("lamp-light");
const actlight = document.getElementById("act-light");
const login = document.querySelector(".login-cntr");


btn.addEventListener("click", () => {
    lamp.classList.toggle("active");
    actlight.classList.toggle("active");
    login.classList.toggle("active");
});