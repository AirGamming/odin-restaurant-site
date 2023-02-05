import * as Logo from "/img/logo.png";

let menu = {
    "items": [
        {
            "name": "Logo",
            "url": "/",
            "img": Logo.default
        },
        {
            "name": "Home",
            "url": "/"
        },
        {
            "name": "About",
            "url": "/about"
        },
        {
            "name": "Contact",
            "url": "/contact"
        },
        {
            "name": "Menu",
            "url": "/menu"
        },
        {
            "name": "",
            "url": "/"
        }
    ],
    Render(){
        let list = document.createElement("ul");
        list.setAttribute("id", "navbar");
        document.body.appendChild(list);
        menu.items.forEach(item => {
            if(item.img){
                let img = document.createElement("img");
                img.setAttribute("src", item.img);
                img.setAttribute("class", "navItem");
                img.setAttribute("alt", item.name);
                img.setAttribute("height", 64);
                list.appendChild(img);
            }else{
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.setAttribute("href", item.url);
                a.innerHTML = item.name;
                a.setAttribute("class", "navItem");
                li.appendChild(a);
                list.appendChild(li);
            }
        });
    }
};


export default menu.Render();