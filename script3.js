const items = document.querySelector(".items");
const clearBtn = document.querySelector(".btn-clear");
const removeIcon = document.querySelector(".remove-item");
const lis = document.querySelectorAll("li");

clearBtn.addEventListener("click", clearAll);
items.addEventListener("click", removeSingleItem);
removeIcon.addEventListener("click", removeItemByIcon);

function clearAll() {
    items.remove();
}

function removeSingleItem(event) {
    if(event.target.tagName === "LI") {
        event.target.remove();
    }
}

function removeItemByIcon(event) {
    event.target.parentElement.remove();
}
