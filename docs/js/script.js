const nav = document.querySelector(".navigation");
const burger = nav.querySelector(".navigation__burger");

burger.addEventListener("click", function () {
    if (nav.classList.contains("navigation--open")) {
        nav.classList.remove("navigation--open")
    } else {
        nav.classList.add("navigation--open")
    }
});