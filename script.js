console.log("Portfolio Loaded Successfully");

var typed = new Typed(".typing", {

    strings: [
        "AI & Machine Learning Enthusiast",
        "Python Programmer",
        "Natural Language Processing Enthusiast"
    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1500,

    loop: true
});
AOS.init({
    duration: 1000,
    once: false
});
/* See More Projects */

const toggleBtn = document.getElementById("toggleProjectsBtn");

const hiddenProjects = document.querySelectorAll(".hidden-project");

let isExpanded = false;

toggleBtn.addEventListener("click", () => {

    if (!isExpanded) {

        hiddenProjects.forEach(project => {

            project.style.display = "block";
        });

        toggleBtn.innerText = "Show Less";

        isExpanded = true;

    } 
    
    else {

        hiddenProjects.forEach(project => {

            project.style.display = "none";
        });

        toggleBtn.innerText = "See More";

        isExpanded = false;
    }
});
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";
});
const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});