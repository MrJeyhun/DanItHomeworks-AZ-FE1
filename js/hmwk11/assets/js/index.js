//set event handler when button keydown
document.addEventListener("keydown", function(key) {
  const btn = document.getElementsByClassName("btn");
  if (key.code == "Enter") {
    btn[0].style.backgroundColor = "#003cff";
  }
  if (key.code == "KeyB") {
    btn[1].style.backgroundColor = "#003cff";
  }
  if (key.code == "KeyI") {
    btn[2].style.backgroundColor = "#003cff";
  }
  if (key.code == "KeyT") {
    btn[3].style.backgroundColor = "#003cff";
  }
  if (key.code == "KeyM") {
    btn[4].style.backgroundColor = "#003cff";
  }
  if (key.code == "KeyA") {
    btn[5].style.backgroundColor = "#003cff";
  }
  if (key.code == "KeyN") {
    btn[6].style.backgroundColor = "#003cff";
  }
});

//set event handler for when the button keyup
document.addEventListener("keyup", function(key) {
  const btn = document.getElementsByClassName("btn");
  if (key.code == "Enter") {
    btn[0].style.backgroundColor = "#000000";
  }
  if (key.code == "KeyB") {
    btn[1].style.backgroundColor = "#000000";
  }
  if (key.code == "KeyI") {
    btn[2].style.backgroundColor = "#000000";
  }
  if (key.code == "KeyT") {
    btn[3].style.backgroundColor = "#000000";
  }
  if (key.code == "KeyM") {
    btn[4].style.backgroundColor = "#000000";
  }
  if (key.code == "KeyA") {
    btn[5].style.backgroundColor = "#000000";
  }

  if (key.code == "KeyN") {
    btn[6].style.backgroundColor = "#000000";
  }
});
