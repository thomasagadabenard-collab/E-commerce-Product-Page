let ham = document.querySelector(".hamburger");

let nav = document.querySelector(".nav-container");

let close = document.querySelector(".close");

ham.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
})

window.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
        navContainer.classList.remove("active");
    }
});

