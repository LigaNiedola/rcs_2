// Atrast visus telefonus
const allPhones = document.getElementsByTagName("h1");
console.log(allPhones);

const allPhones1 = document.querySelector("#root > div");
console.log(allPhones1);

// Atrast Apple Iphone 14 pro max

const iphone = document.querySelector("#root > div:nth-child(2)");
console.log(iphone);
// console.log(iphone);

// Apple Iphone 13 pie specifikācijas pievienot jaunu specifikāciju
const element = document.documentquerySelector("#root > div div.specifications ul");
const newElement = document.createElement("li");
newElement.innerText = "Camera: 8MP";

firstEntry.appendChild(newElement);
console.log(element);