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
let getAndCheck = () => {
  //ask a number from user
  let status;
  while (!status) {
    var num = prompt("Type a number");
    if (num.startsWith(0)) {
      alert("Sorry, no numbers");
      status = "";
    } else if (num != +num) {
      alert("You didn't enter integer, try again");
      status = "";
    } else {
      break;
    }
  }
  showDivisibleByFive(num);
};

let showDivisibleByFive = num => {
  for (var i = 1; i < +num; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
};
// console.log(getAndCheck());
