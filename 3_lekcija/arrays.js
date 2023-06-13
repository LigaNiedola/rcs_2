const arrayVariable = ["test"];
const arrayVariable1 = [1, 2, 3, 0, 5];
console.log(arrayVariable1[4]); // pirmais elements sākas ar 0
console.log(arrayVariable1[arrayVariable1.length - 1]); // pirmais elements sākas ar 0 tapēc pēdējo skaitli var dabūt šādi

arrayVariable1[0] = "Test"; //pārraksta pirmo vertību
arrayVariable1[4] = "Test1"; //pārraksta pirmo vertību

console.log(Boolean(arrayVariable1[5])); // false, jo nulle

console.log(arrayVariable1.pop()); // paņem pēdējo un neatstāj iekšā
console.log(arrayVariable1); // visi bez pēdējā

const indexOfNumber = arrayVariable1.indexOf(3);
arrayVariable1[indexOfNumber] = "I change";

console.log(arrayVariable1); 
if (indexOfNumber > -1){
    
    arrayVariable1[indexOfNumber] = "I cc";

}
