let priceHolder = () => {
  //acces input
  let inpt = document.getElementById("priceInput");
  //add price class to change border of input when input is focused
  inpt.addEventListener("focus", () => {
    inpt.classList.add("price");
  });
  //re price class to set  border of input default when input is unfocused
  inpt.addEventListener("blur", () => {
    inpt.classList.remove("price");
  });
  //read change inside input and send to info text above input
  inpt.addEventListener("change", () => {
    var val = document.getElementById("priceInput").value;
    var info = document.querySelector(".tools");
    info.classList.remove("deactive");
    info.classList.add("active");
    document.getElementById("inputtext").innerHTML = "Current value " + val;
  });
  //access X button
  let btn = document.getElementById("btn");
  //add event , so when button is clicked , remove whole info
  btn.addEventListener("click", () => {
    var info1 = document.querySelector(".tools");
    info1.classList.add("deactive");
    info1.classList.remove("active");
    var val = (document.getElementById("priceInput").value = 0);
  });
};
priceHolder();
