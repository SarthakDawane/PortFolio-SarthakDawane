var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0" 
}
function closemenu(){
    sidemenu.style.right = "-400px" 
}

var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "IMAGES/moon.png";
    }
    else{
        icon.src = "IMAGES/sun.png"
    }
}
