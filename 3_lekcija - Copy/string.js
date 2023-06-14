const stringVariable = "50 students!"; //teksts pēdiņās
const EmptyText = " Empty";

console.log(stringVariable + EmptyText);
console.log(stringVariable.concat(EmptyText, " Jap"));

const result = stringVariable.concat(EmptyText, " Jap"); //labāks veids par iepriekšējo teksta savienošanai
console.log(result);


const name = "Raivo";

console.log(`Hello ${name}`); 

"Hello, my name is Arturs".includes("Arturs");
"Hello, my name is Arturs".replace("Arturs", "Aivars"); //aizvieto arturd
console.log("test test1 test2".split(" ")); //sadala pēc atstarpes

console.log(" Text Name ".trim()); //nodzēš atstarpes pirms un pēc

""