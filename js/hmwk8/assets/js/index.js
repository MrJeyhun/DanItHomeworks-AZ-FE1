let priceHolder = () => {
  //acces input
  let inpt = document.querySelector(".priceInput");
  //access X button
  let btn = document.getElementById("btn");
  //access info-container
  let tools = document.querySelector(".tools");
  //add price class to change border of input when input is focused
  inpt.addEventListener("focus", () => {
    inpt.classList.add("pI-focus");
  });
  //re price class to set  border of input default when input is unfocused
  inpt.addEventListener("blur", () => {
    inpt.classList.remove("pI-focus");
  });
  //read change inside input and send to info text above input
  inpt.addEventListener("change", () => {
    var val = document.querySelector(".priceInput").value;
    var info = document.querySelector(".inputtext");
    tools.classList.remove("deactive");
    tools.classList.add("active");
    if (+val <= 0) {
      info.classList.remove("default-col");
      info.classList.add("warning-col");
      inpt.classList.remove("pI-focus");
      inpt.classList.remove("pI-default");
      inpt.classList.add("pI-warning");
      btn.classList.remove("btn-default");
      btn.classList.add("btn-warning");

      info.innerHTML = "Please, enter correct value";
    } else {
      info.classList.remove("warning-col");
      info.classList.add("default-col");
      inpt.classList.remove("inpt-warning");
      inpt.classList.add("pI-focus");
      inpt.classList.remove("pI-warning");
      inpt.classList.add("pI-default");
      btn.classList.remove("btn-warning");
      btn.classList.add("btn-default");

      info.innerHTML = "Current value " + val;
    }
    info.classList.remove("deactive");
    info.classList.add("active");
  });

  //add event , so when button is clicked , remove whole info
  btn.addEventListener("click", () => {
    var info1 = document.querySelector(".tools");
    info1.classList.add("deactive");
    info1.classList.remove("active");
    inpt.classList.remove("pI-warning");
    inpt.classList.add("pI-default");

    document.querySelector(".priceInput").value = 0;
  });
};
priceHolder();
