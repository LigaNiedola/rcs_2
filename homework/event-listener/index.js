// const deleteButtons = document.getElementsByClassName("delete");
// // const deleteButton = deleteButtons[0];


// // deleteButton.addEventListener("click", () => {
// //     const productWrapper = deleteButton.parentElement;
// //     productWrapper.remove();
// // })
// const onDelete = (element)

// Array.deleteButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const productWrapper = button.parentElement;
//         onDelete(productWrapper);
//     })
// });

function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  function calculator() {
    const operation = prompt("Choose an operation: add, subtract, multiply, divide");
    
    if (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide") {
      console.log("Invalid operation. Please try again.");
      return;
    }
  
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
  
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      console.log("Invalid numbers. Please try again.");
      return;
    }
  
    let result;
    
    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "subtract":
        result = subtract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        if (num2 === 0) {
          console.log("Cannot divide by zero.");
          return;
        }
        result = divide(num1, num2);
        break;
      default:
        console.log("Invalid operation. Please try again.");
        return;
    }
  
    console.log("Result: " + result);
  }
  
  calculator();