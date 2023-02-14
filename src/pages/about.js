let components = [
    {
        name: "header",
        content: "About us",
        type: "h1"
    },
    {
        name: "text",
        content: "lorem st. 410<br> lorem ipsum <br> Norwegian Sea <br>zip-code 12345",
        type: "p"
    },
    {
        name: "map",
        content: `<div style="width: 100%"><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=66.51326044311188,-4.218750000000001+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>`,
        type: "div"
    }
]

export default function aboutItems() {
    let main = document.createElement("main");
    main.setAttribute("id", "about");
    components.forEach(component => {
        let element = document.createElement(component.type);
        element.innerHTML = component.content;
        element.setAttribute("id", component.name);
        main.appendChild(element);
        
    });
    document.body.appendChild(main);
}
    