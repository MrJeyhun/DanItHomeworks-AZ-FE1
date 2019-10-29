//advanced version

// check number is prime or not
let isPrime = num => {
  if (num === 2) {
    return true;
  } else if (num > 0) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

//show all prime number between given interval
let showPrimes = () => {
  //get interval (from m to n) from user
  let m = prompt("From: ");
  let n = prompt("To: ");
  //check data correctness
  if (+m >= +n) {
    alert("Wrong interval! Try again!");
    showPrimes();
  } else if (m.startsWith(0) || n.startsWith(0)) {
    alert("Please, type a number, (number can't start with 0)");
    showPrimes();
  } else if (m != +m || n != +n) {
    alert("You din't enter a number, try again!");
    showPrimes();
  }
  for (var i = +m; i < +n; i++) {
    isPrime(i);
    if (isPrime(i) == true) {
      console.log(i);
    }
  }
};

showPrimes();

// simple version
let divisibleBy_5 = () => {
  //ask a number from user
  var num = prompt("Type a number");
  if (num.startsWith(0)) {
    console.log("Sorry, no numbers");
    divisibleBy_5();
  } else if (num != +num) {
    alert("You didn't enter integer, try again");
    divisibleBy_5();
  }

  for (var i = 1; i < +num; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
};
//divisibleBy_5();
