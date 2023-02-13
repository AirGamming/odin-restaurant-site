import * as image from "/img/food.jpeg";

let content = [{
    title: "Polish cusine from all around country",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc elit tincidunt nunc, eget",
    class: "normal"
},
{   
    title: "img",
    content: image.default,
    class: "normal"
},
{
    title: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna ligula, consequat in enim eu, feugiat euismod nunc. Nunc eleifend nulla erat, vitae aliquam dui finibus sit amet. Nulla eros mi, dapibus non convallis eu, dictum in massa. Maecenas eu justo quis ante venenatis placerat ac eget quam. Mauris accumsan rutrum nisi ut ullamcorper. Proin rutrum lacus nec leo faucibus placerat. Nullam tempus ante a nulla rutrum, a gravida purus bibendum. ",
    class: "fullWidth"
}
]

export default function homeContent(){ 
    let main = document.createElement("main");
    main.setAttribute("id", "home");
    content.forEach(el => {
        let div = document.createElement("div")
        div.setAttribute("class", "content")
        if(el.title == "img"){
            let img = document.createElement("img");
            img.setAttribute("src", image.default);
            img.setAttribute("alt", "food")
            img.setAttribute("class", "img")
            main.appendChild(img)
        }
        else{
            let div = document.createElement("div")
            let title = document.createElement("h1");
            let content = document.createElement("p");
            title.innerHTML = el.title;
            console.log(el.content)
            content.innerHTML = el.content;
            div.appendChild(title);
            div.appendChild(content);
            main.appendChild(div);
            document.body.appendChild(main);    
            if(el.class == "fullWidth"){
                div.setAttribute("class", "content fullWidth")
            }
        }

        }
    );
    document.body.appendChild(main)
};