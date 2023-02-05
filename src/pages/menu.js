 import menu from "/src/json/menu.json";
 
let menuItems = menu.menu;

export default menuItems.forEach(item => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.innerHTML = item.name;
    a.setAttribute("class", "menu-item");
    li.appendChild(a);
    document.querySelector("#menu").appendChild(li);
});