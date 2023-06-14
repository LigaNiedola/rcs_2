
const objectVasriable = {
    fullName: "Liga Niedola",
    email: "Liga@Niedola",
    phoneNumber: "26746407",
    1: "hello",
    "@ttt": 1,
};

console.log(objectVasriable); 

console.log(objectVasriable["email"]); 

console.log(objectVasriable.email); 

console.log(objectVasriable["1"]); //ja sakas ar ciparu, tad tikai caur kvadratiekabvam un pedinam
console.log(objectVasriable["@ttt"]); 

const auto = {
    models: ["Audi A3", "Audi A5"]
};
console.log(auto.models); 

const house = {
  adress: "Adress text",
  rooms: [
    {
      name: "living room",
      price: "123",
      component: [
        {
            micro: "history",
            micros: "historys"
        }
      ]
    },

    { 
        name: "Kitchen",
        price: "123",
    },
  ],
};
console.log(house.rooms[0].component[0]); 

const requiredAge = 21;
const myAge = 20;

if (myAge >= requiredAge){
    console.log("Yo are alloved smoke")
}
else {
    console.log("You are not alloved smoke")
}
;

const requiredEntryAge = 18;
const requiredDrinkAge = 21;

const myAges = 19;

if (myAges >= requiredEntryAge && myAge >= requiredDrinkAge){  //and
    console.log("3")
} else if(myAge >= requiredEntryAge){
    console.log("You are alloved entry")
} else {console.log("You are not alloved smoke")
};
if (myAges >= requiredEntryAge || myAges >= requiredDrinkAge) {
    console.log("You are alloved entry")
}// or