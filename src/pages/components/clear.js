export default function clear(){
    let mainDiv = document.querySelector("main");
    let navItems = document.querySelectorAll(".navItem");
    if(mainDiv){
        mainDiv.remove();
    }else if (mainDiv == null){
        mainDiv = document.createElement("main");
        mainDiv.setAttribute("id", "home");
        document.body.appendChild(mainDiv);
    }
    navItems.forEach(el => {
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }if(mainDiv.classList.contains("menu")){
            mainDiv.classList.remove("menu")
        }
    });
} 

