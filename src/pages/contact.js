import * as manager from "/img/person2.jpg";
import * as chef from "/img/person1.jpg";
let people = [
    {
        name: "John",
        surname: "Smith",
        age: 25,
        phone: "555-555-555",
        email: "totalynormal@mail.com",
        position: "manager",
        picture: manager.default
    },
    {
        name: "Jane",
        surname: "Doe",
        age: 30,
        phone: "555-555-555",
        email: "definitlyreal@mail.com",
        position: "kitchen chef",
        picture: chef.default
    }];

export default function contactItems() {
    let main = document.createElement("main");
    people.forEach(person => {
        let div = document.createElement("div");
        div.setAttribute("class", "person");
        let img = document.createElement("img");
        img.setAttribute("src", person.picture);
        img.setAttribute("alt", person.name + " " + person.surname);
        img.setAttribute("height", "100px")
        let left = document.createElement("div")
        left.setAttribute("class", "left")
        div.appendChild(left)
        let name = document.createElement("h2");
        name.innerHTML = person.name + " " + person.surname;
        let age = document.createElement("p");
        let phone = document.createElement("p");
        phone.innerHTML = person.phone;
        let email = document.createElement("p");
        email.innerHTML = person.email;
        left.append(name, age, phone, email);
        div.append(left, img);
        main.appendChild(div);
    }
   );
   document.body.appendChild(main);
}