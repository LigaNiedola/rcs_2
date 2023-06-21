// const root =document.getElementById("root");
// console.log(root);

// const divs = document.getElementsByTagName("div");
// console.log(divs);

// const byClass = document.getElementsByClassName("wrapper");
// console.log(byClass);

// const querySelector = document.querySelector(".wrapper")
// console.log(divs);

// const querySelectorAll = document.querySelectorAll(".wrapper")
// console.log(divs);

const newPhone = document.createElement("h1");
newPhone.innerText = "Apple iphone 13";

const newPhone2 = document.createElement("h1");
newPhone2.innerText = "Samsung A54";

const root = document.getElementById("root");
root.appendChild(newPhone);
root.prepend(newPhone2);

// newPhone.remove();
const deleteButton = document.querySelector(".delete")