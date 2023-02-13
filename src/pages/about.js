

export default function aboutItems() {
    let main = document.createElement("main");
    let div = document.createElement("div");
    div.setAttribute("class", "about");
    let header = document.createElement("h1");
    header.innerHTML = "About us";
    let text = document.createElement("p");
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien ut euismod luctus, lorem nisl tincidunt nunc, quis porttitor mauris lacus in enim. Aliquam erat volutpat. Nulla facilisi. Nulla facilisi. Donec vel arcu quis est luctus volutpat. Nullam euismod, turpis ut aliquam ultrices, nulla nisl luctus massa, vitae lacinia ipsum tellus a nunc. Donec vel arcu quis est luctus volutpat. Nulla facilisi. Nulla facilisi. Donec vel arcu quis est luctus volutpat. Nullam euismod, turpis ut aliquam ultrices, nulla nisl luctus massa, vitae lacinia ipsum tellus a nunc. Donec vel arcu quis est luctus volutpat. Nulla facilisi. Nulla facilisi. Donec vel arcu quis est luctus volutpat. Nullam euismod, turpis ut aliquam ultrices, nulla nisl luctus massa, vitae lacinia ipsum tellus a nunc. Donec vel arcu quis est luctus volutpat. Nulla facilisi. Nulla facilisi. Donec vel arcu quis est luctus volutpat. Nullam euismod, turpis ut aliquam ultrices, nulla nisl luctus massa, vitae lacinia ipsum tellus a nunc. Donec vel arcu quis est luctus volutpat. Nulla facilisi. Nulla facilisi. Donec vel arcu quis est luctus volutpat. Nullam euismod, turpis ut aliquam ultrices, nulla nisl luctus massa, vitae lacinia ipsum tellus a nunc. Donec vel arcu quis est luctus volutpat. Nulla facilisi. Nulla facilisi. Donec vel arcu quis est luctus volutpat. Nullam euismod, turpis"
    div.append(header, text);
    main.appendChild(div);
    document.body.appendChild(main);
}
    