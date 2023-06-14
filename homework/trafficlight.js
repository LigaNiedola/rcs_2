let signals = ["green", "yellow", "red"];
let currentSignal = "red";

if (currentSignal == signals[1]) {
    console.log("wait!");
}
else if (currentSignal == signals[2]) {
    console.log("Stop!");
}
else if (currentSignal == signals[0]) {
    console.log("Go!");
}
else {
    console.log("Invalid signal!");
}
