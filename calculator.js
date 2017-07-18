let firstNum = document.getElementById("first");
let secondNum = document.getElementById("second");
let adding = document.getElementById("add");
let subtracting = document.getElementById("subtract");
let multiplying = document.getElementById("multiply");
let dividing = document.getElementById("divide");
let postArea = document.getElementById("outcome");

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function mulitply(a, b) {
  let c = a * b;
  return c;
  console.log(c);
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function add(a, b) {
   let c = a + b;
   return c;
   console.log(c);
 }

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 function subtract(a, b) {
   let c = a - b;
   return c;
   console.log(c);
 }

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
 function divide(a, b) {
   let c = a / b;
   return c;
   console.log(c);
 }


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function doMath(a,b,func) {
  func(a,b);
}



adding.addEventListener("click", doMath(firstNum, secondNum, add));
subtracting.addEventListener("click", doMath(firstNum, secondNum, subtract));
multiplying.addEventListener("click", doMath(firstNum, secondNum, mulitply));
dividing.addEventListener("click", doMath(firstNum, secondNum, divide));
