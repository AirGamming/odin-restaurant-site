 import menu from "/src/json/menu.json";
 
let menuItems = menu.menu;

export default menuItems.forEach(item => {
    let div = document.createElement("div");
    div.setAttribute("class", "menuItem")
    let left = document.createElement("div");
    left.setAttribute("class", "left");
    div.appendChild(left);
    let right = document.createElement("div");
    right.setAttribute("class", "right");
    div.appendChild(right);
    let namePL = document.createElement("h2");
    namePL.innerHTML = item.namePL;
    let nameEN = document.createElement("i");
    nameEN.innerHTML = item.nameEN;
    let ingredients = document.createElement("p");
    ingredients.innerHTML = item.ingredients.join(", ");

    left.append(namePL, nameEN, ingredients)
    let price = document.createElement("h1");
    price.innerHTML = item.price+ " €";
    right.append(price)
    document.body.appendChild(div);
});