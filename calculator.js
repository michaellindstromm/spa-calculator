let firstNum = document.getElementById("first");
let secondNum = document.getElementById("second"); //Input numbers
let adding = document.getElementById("add");
let subtracting = document.getElementById("subtract");
let multiplying = document.getElementById("multiply");
let dividing = document.getElementById("divide"); //Operation Buttons
let postArea = document.getElementById("outcome"); //DOM Post area

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(a, b) {
  let c = Number(firstNum.value) * Number(secondNum.value);
  postArea.innerHTML = `<p>${c}</p>`
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(a, b) {
  let c = Number(firstNum.value) + Number(secondNum.value);
  postArea.innerHTML = `<p>${c}</p>`
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(a, b) {
  let c = Number(firstNum.value) - Number(secondNum.value);
  postArea.innerHTML = `<p>${c}</p>`
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(a, b) {
  let c = Number(firstNum.value) / Number(secondNum.value);
  postArea.innerHTML = `<p>${c}</p>`
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function doMath(a, b, func) {
  func(a, b);
}



adding.addEventListener("click", function() {
  doMath(firstNum.value, secondNum.value, add)
});
subtracting.addEventListener("click", function() {
  doMath(firstNum.value, secondNum.value, subtract)
});
multiplying.addEventListener("click", function() {
  doMath(firstNum.value, secondNum.value, multiply)
});
dividing.addEventListener("click", function() {
  doMath(firstNum.value, secondNum.value, divide)
});
