import "./style.css";
import navbar from "./pages/components/navbar.js";
import * as Logo from "../img/logo.ico";
import menuItems from "/src/pages/menu.js";
import clear from "./pages/components/clear.js"


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
let navbaritems = navbar();
navbaritems.forEach(el => {
    if( el.classList == "logo"){
    }else{
        el.addEventListener("click", e =>{
            if(e.target.classList == "navItem Menu"){    
                clear();
                e.target.classList.add("active")
                menuItems();
            }
        })
    }
});