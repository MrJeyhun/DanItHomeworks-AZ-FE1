//access images/buttons

let pauseButton = document.querySelector(".fa-pause-circle");
let playButton = document.querySelector(".fa-play");
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
