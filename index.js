

let tablinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemenu = document.querySelector('#sidemenu');

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}