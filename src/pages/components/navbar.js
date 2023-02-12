import * as Logo from "/img/logo.png";

let menu = {
    "items": [
        {
            "name": "Logo",
            "type": "p",
            "img": Logo.default
        },
        {
            "name": "Home",
            "type": "button"
        },
        {
            "name": "About",
            "type": "button"
        },
        {
            "name": "Contact",
            "type": "button"
        },
        {
            "name": "Menu",
            "type": "button"
        },
        {
            "name": "",
            "type": "div"
        }
    ],
};

export default function navnar(){
    let items = document.createElement("ul");
    let list = []
    items.setAttribute("id", "navbar");
    document.body.appendChild(items);
    menu.items.forEach(item => {
        if(item.img){
            let img = document.createElement("img");
            img.setAttribute("src", item.img);
            img.setAttribute("class", "logo");
            img.setAttribute("alt", item.name);
            img.setAttribute("height", 64);
            items.appendChild(img);
            list.push(img)
        }else{
            let li = document.createElement("li");
            let a = document.createElement(item.type);
            a.innerHTML = item.name;
            a.setAttribute("class", `navItem ${item.name}`);
            li.appendChild(a);
            items.appendChild(li);
            list.push(li)
        }
    });
    return list
}