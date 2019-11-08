//get all tabs in navbar
let tabs = document.querySelectorAll(".tabs");
//get all contents
let tabs_content = document.querySelectorAll(".contents");
//set index for every element and every content
for (let i = 0; i < tabs.length; i++) {
  tabs[i].dataset.index = i;
  tabs_content[i].dataset.key = i;
  //set event handler for accomodate evey content to tabs which it belongs to
  tabs[i].addEventListener("click", () => {
    tabs.forEach(x => {
      x.classList.remove("active");
    });
    tabs_content.forEach(x => {
      x.style.display = "none";
    });
    tabs_content[i].style.display = "block";
    tabs[i].classList.add("active");
  });
}

tabs_content.forEach(x => {
  if (x.dataset.key == 0) {
    return;
  }
  x.style.display = "none";
});
