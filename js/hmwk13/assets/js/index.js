var recentPageStatus = true;
while (recentPageStatus) {
  if (localStorage.getItem("recentDOM") == undefined) {
    recentPageStatus = false;
  } else {
    document.body.innerHTML = localStorage.getItem("recentDOM");
    recentPageStatus = false;
  }
}

//access page container/images/buttons

let pauseButton = document.querySelector(".fa-pause-circle");
let playButton = document.querySelector(".fa-play");
let gender = document.querySelector(".gender");
let container = document.querySelector(".container");
let images = document.querySelectorAll(".image-to-show");

//displaying images one by one respectively
let i = 0;
let displayImg = image => {
  if (i >= image.length) {
    i = 0;
  }
  document.querySelector(".active").classList.remove("active");
  image[i].classList.add("active");
  i++;
};
//set timer for function, it means time between changing images

var timer = setInterval("displayImg(images)", 1000);

//set evend handler for pause button
pauseButton.addEventListener("click", () => {
  clearInterval(timer);
});

//set evend handler for play button

playButton.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    timer = setInterval("displayImg(images)", 1000);
  } else {
    timer = setInterval("displayImg(images)", 1000);
  }
});

//set event handler for gender button. It will change bacground color and colors of buttons

gender.addEventListener("click", () => {
  container.classList.toggle("bg-color-default");
  container.classList.toggle("bg-color-femine");
  gender.classList.toggle("fa-venus");
  gender.classList.toggle("fa-mars");
  pauseButton.classList.toggle("pause-default");
  pauseButton.classList.toggle("pause-femine");
  playButton.classList.toggle("play-default");
  playButton.classList.toggle("play-femine");

  var recentDOM = document.body.innerHTML;
  localStorage.setItem("recentDOM", recentDOM);
});

//save
