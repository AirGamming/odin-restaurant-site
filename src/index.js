import "./style.css";
import navbar from "./pages/components/navbar.js";
import * as Logo from "/img/logo.ico";
import menuItems from "/src/pages/menu.js";
import clear from "./pages/components/clear.js"
import homeContent from "/src/pages/home.js";
import aboutItems from "/src/pages/about.js";
import contactItems from "/src/pages/contact.js";

document.favicon = Logo.default;



function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
let navbaritems = navbar();
navbaritems.forEach(el => {
    if( el.classList == "logo"){
    }else{
        el.addEventListener("click", e =>{
            clear();
            e.target.classList.add("active")
            if(e.target.classList.contains("Menu")){
                menuItems();
            }else if (e.target.classList.contains("Home")){
                homeContent();
            }else if (e.target.classList.contains("About")){
                aboutItems();
            }else if (e.target.classList.contains("Contact")){
                contactItems();
            }
        })
    }
});
homeContent();