//

// BTNS
const btnOpener = document.querySelector("#nav-opener");
const btnClose = document.querySelector("#nav-closer");

// ELEMENTS
const body = document.querySelector("#body");
const navbar = document.querySelector("#nav-bar");

btnOpener.addEventListener("click", () => {
 navbar.style.display = "block";
 body.classList.add("no-scroll");
 btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
 navbar.style.display = "none";
 body.classList.remove("no-scroll");
 btnClose.style.display = "none";
});
