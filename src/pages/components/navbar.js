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
            "type": "h3"
        },
        {
            "name": "About",
            "type": "h3"
        },
        {
            "name": "Contact",
            "type": "h3"
        },
        {
            "name": "Menu",
            "type": "h3"
        },
        {
            "name": "",
            "type": "h3"
        }
    ],
};

export default function navnar(){
    let list = document.createElement("ul");
    list.setAttribute("id", "navbar");
    document.body.appendChild(list);
    menu.items.forEach(item => {
        if(item.img){
            let img = document.createElement("img");
            img.setAttribute("src", item.img);
            img.setAttribute("class", "logo");
            img.setAttribute("alt", item.name);
            img.setAttribute("height", 64);
            list.appendChild(img);
        }else{
            let li = document.createElement("li");
            let a = document.createElement(item.type);

            a.innerHTML = item.name;
            a.setAttribute("class", `navItem ${item.name}`);
            li.appendChild(a);
            list.appendChild(li);
        }
    });
}