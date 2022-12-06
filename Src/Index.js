
let body = document.body;
let sidenav = document.getElementById("sidenav");
let toggle_sidenav = document.getElementById("toggle_sidenav");
 

function darkMode() {
    body.classList.toggle("dark-mode");
    sidenav.style.backgroundColor = "#124a70";
}

function openNav(){
    sidenav.style.width = "250px";  
    toggle_sidenav.style.opacity = "0";
}
function closeNav(){
    sidenav.style.width = "0px";
    toggle_sidenav.style.opacity  = "1";
}

