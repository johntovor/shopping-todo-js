const title = document.querySelector("h1");

title.innerHTML = "<strong>Python, JavaScript</strong>";
title.style.color = "red";
title.style.padding = "10px";
title.style.backgroundColor = "black";
title.style.borderRadius = "10px";

// const ul = document.querySelector("ul");
// const thirdItem = ul.querySelector("li:nth-child(3)");
// thirdItem.innerText = "Banana";
// thirdItem.style.backgroundColor = "yellowgreen";
// thirdItem.style.color = "#fff";

// const input = document.querySelector("input[type='text']");
// input.style.border = "1px solid #000000";

const btn = document.querySelector("button[type='submit']");
console.log(btn);
btn.style.backgroundColor = "blue";

const listItems = document.querySelectorAll("li");
listItems.forEach((item) => item.style.color = "red");