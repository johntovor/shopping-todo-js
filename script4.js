const heading = document.querySelector("h1");
heading.textContent = "My Shopping List"
heading.style.backgroundColor = "#000";
heading.style.color = "yellow";
heading.style.padding = "10px 20px";
heading.style.border = "none";
heading.style.borderRadius = "0 20px 0 20px";

const addItemBtn = document.querySelector("button[type='submit']");
const itemsList = document.querySelector(".items");
const singleItem = document.querySelectorAll("li");
const single = document.querySelector("li");

const clearBtn = document.getElementById("clear");
clearBtn.style.backgroundColor = "yellow";
clearBtn.style.color = "#000";
clearBtn.style.border = "2px solid #000";
clearBtn.style.borderRadius = "50px";
const removeBtn = document.querySelector(".remove-item");
let itemsArray = [];


function addItemToList(event) {
    event.preventDefault();

    const itemInput = document.querySelector("input[type='text']");
    if(itemInput.value === "") {
        alert("Field cannot be blank. Enter an item to proceed.");
    } else {
        const item = document.createElement("li");
        const text = document.createTextNode(itemInput.value.charAt(0).toUpperCase() + itemInput.value.slice(1));
        item.appendChild(text);
        itemsArray.push(itemInput.value);

        const btn = document.createElement("button");
        btn.className = "remove-item btn-link text-red";

        const icon = document.createElement("i");
        icon.className = `fa-solid fa-xmark`;

        btn.appendChild(icon);
        item.appendChild(btn);

        itemsList.appendChild(item);
        itemInput.value = "";
    }
}


function clearAllItems(event) {
    event.preventDefault();
    itemsList.remove();
}

function removeSingleItem(event) {
    if(event.target.tagName === "LI") {
        event.target.remove();
    }
}


singleItem.forEach((item) => item.addEventListener("click", (event) => {
    if(event.target.className == "fa-solid fa-xmark"){
        item.remove();
    }
}))


addItemBtn.addEventListener("click", addItemToList);
clearBtn.addEventListener("click", clearAllItems);
itemsList.addEventListener("click", removeSingleItem);

console.log(itemsArray);
