 import menu from "/src/json/menu.json";
 
let menuItems = menu.menu;
let typeOfFood = []
menuItems.forEach(item =>{
    let foodType = item.type;
    if(! typeOfFood.includes(foodType)){
        typeOfFood.push(foodType);
    };
});

export default function menuRender(){
    let main = document.createElement("main")
    main.setAttribute("id", "menu");
    // typeOfFood.forEach(item => {
    //     let sort =  document.createElement("div");
    //     sort.setAttribute("id", item);
    //     sort.setAttribute("class", "type")
    //     let header = document.createElement("h2");
    //     header.innerText = item
    //     header.style.textTransform = "uppercase"
    //     sort.appendChild(header)
    //     main.appendChild(sort)
    //  }
    // );
    menuItems.forEach(item => {
    let div = document.createElement("div");
    div.setAttribute("class", "menuItem");

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
    let typ = item.type

    let price = document.createElement("h1");
    price.innerHTML = item.price+ " €";
    price.setAttribute("class", "price")
    right.append(price);
    // // console.dir(item.id)
    // // // let sor = document.querySelector(`#${item.type}`)
    // let typeDiv = document.querySelectorAll(".type")
    // console.log(typeDiv)
    // typeDiv.forEach(el => {
    //     if(el.id == typ){
    //         console.log(typ)
    //         el.appendChild(div)
    //     }
    // })
    main.appendChild(div)
}
);
document.body.appendChild(main)
};