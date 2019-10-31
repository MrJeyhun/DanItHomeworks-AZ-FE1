let getData = () => {
  let num1;
  let num2;
  while (!num1 && !num2) {
    //ask first and second number from the user
    let inputNum1 = prompt("Enter first number: ");
    let inputNum2 = prompt("Enter second number: ");

    //saving default value
    num1 = inputNum1;
    num2 = inputNum2;

    //check number data correction & get operation
    if ((+num1 && +num2) || (num1 == 0 || num2 == 0)) {
      //ask operation from the user
      let operation = prompt("Enter operation symbol (+, -, *, /)");
      //check operation data correctness
      let oprs = ["+", "-", "*", "/"];
      let testOpr = oprs.some(x => operation.includes(x));
      if (testOpr) {
        console.log(armstrongCalc(num1, num2, operation));
      } else {
        alert("Wrong operation! Try again!");
        num1 = "";
        num2 = "";
      }
    } else {
      alert("One of numbers isn't correct, use only numbers!");
      num1 = "";
      num2 = "";
    }
  }
};

let armstrongCalc = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      result = +num1 + +num2;
      return result;
    case "-":
      result = +num1 - +num2;
      return result;
    case "*":
      result = +num1 * +num2;
      return result;
    case "/":
      if (+num2 === 0) {
        alert("You try to divide by zero!, try again!");
        getData();
        break;
      }
      result = +num1 / +num2;
      return result;
  }
};

getData();
