export default function clear(){
    let mainDiv = document.querySelector("main");
    let navItems = document.querySelectorAll(".navItem");
    if(mainDiv){
        console.log(mainDiv.innerHTML);
        mainDiv.remove();
    }
    navItems.forEach(el => {
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }
    });
} 

