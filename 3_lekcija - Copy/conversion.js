
const value = 11;
const value1= "10";
console.log(typeof value); //pārbauda MediaDeviceInfoigā tipu
console.log(typeof value1);

console.log(typeof Number(value1));


console.log(value + value1); // atbilde 1110 jo tekstu pieliek klāt
console.log(value + Number(value1)); // atbilde   b 21

const text = "3 telefoni";
const textAsNumber = Number(text);
const isNumber = Number.isNaN(textAsNumber);

console.log(isNumber);

console.log(typeof String(234));

const email ="";

console.log(Boolean(email));
console.log(!!email);  //saīsināts Boolean
