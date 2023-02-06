import "./style.css";
import Render from "./pages/components/navbar.js";
import * as Logo from "/img/logo.png";
import menuItems from "/src/pages/menu.js";

document.favicon = Logo;
menuItems();
Render();
