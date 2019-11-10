let inputHandler = () => {
  //set display/hidden password for first
  let displayIcons1 = document.querySelectorAll(".icon-password")[0];
  let displayIcons2 = document.querySelectorAll(".icon-password")[1];
  let input1 = document.querySelectorAll(".inpts")[0];
  let input2 = document.querySelectorAll(".inpts")[1];
  let button = document.querySelector(".btn");
  let text = document.querySelector(".text");
  //create show and hide method for further recalling
  let show = input => {
    input.setAttribute("type", "text");
  };

  let hide = input => {
    input.setAttribute("type", "password");
  };
  //create boolean for checking password is diplaying or not
  var showing1 = 0;
  var showing2 = 0;
  //set event handler for first input
  displayIcons1.addEventListener("click", function() {
    //toggle the icons by clicking
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
    //show or hide password
    if (showing1 == 0) {
      showing1 = 1;
      show(input1);
    } else {
      showing1 = 0;
      hide(input1);
    }
  });
  //set event handler for second input

  displayIcons2.addEventListener("click", function() {
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");

    if (showing2 == 0) {
      showing2 = 1;
      show(input2);
    } else {
      showing2 = 0;
      hide(input2);
    }
  });
  //set event handler for button
  button.addEventListener("click", function() {
    if (input1.value !== input2.value) {
      text.classList.remove("deactive");
      text.classList.add("active");
    } else {
      text.classList.remove("active");
      text.classList.add("deactive");
      input1.value = "";
      input2.value = "";
      alert("You are welcome");
    }
  });
};

inputHandler();
