let logIn = () => {
  //Asking guest's name
  let username = prompt("Your name: ");
  //checking data correction
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var num of numbers) {
    if (username.includes(num)) {
      alert("You didn't enter a name, try again");
      logIn();
    }
  }
  //Asking guest's age
  let age = prompt("How old are you?");
  //checking data correction
  if (age != +age) {
    alert("You didn't enter an age, try again!");
    logIn();
  }
  checkAcceptability(username, age);
};

//checking user acceptability for page due to age
let checkAcceptability = (username, age) => {
  if (+age < 18) {
    alert("You are not allowed to visit this website");
  } else if (+age > 18 && +age < 22) {
    let decision = confirm("Are you sure want to continue?");
    if (decision) {
      alert("Welcome " + username);
    } else {
      alert("You are not allowed to visit this website");
    }
  } else {
    alert("Welcome " + username);
  }
};

logIn();
