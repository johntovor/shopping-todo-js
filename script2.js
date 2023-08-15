const li = document.createElement("li");
const text = document.createTextNode("Banana");
li.appendChild(text);

const btn = document.createElement("button");
btn.className = "remove-item btn-link text-red";

const icon = document.createElement("i");
icon.className = "fa-solid fa-xmark";
btn.appendChild(icon);

const ul = document.querySelector(".items");
li.appendChild(btn);
ul.appendChild(li);


function createListItem(item) {
    const li = document.createElement("li");
    const text = document.createTextNode(item);
    li.appendChild(text);

    const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);

    const ul = document.querySelector(".items");
    ul.appendChild(li);
}

function createButton(classes) {
    const button = document.createElement("button");
    button.className = classes;

    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    
    return button;
}

function createIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}

createListItem("Pineapple");
createListItem("Mango");
createListItem("Watermelon");
createListItem("Blackberry");