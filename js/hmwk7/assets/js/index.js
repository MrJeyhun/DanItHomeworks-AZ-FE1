let arr = [
  "McDonalds Free Big Tasty Menu",
  { coupon: "djwb387b2", valid: "12/19" },
  "KFC Free French Fries coupons",
  ["ll32", "ef3f", "ew32"]
];
let getAndList = arr => {
  let items = arr.map(function(el) {
    //check array has sub array or not
    if (Array.isArray(el)) {
      // if there's sub array , append it as sublist
      let subArr = document.createElement("ul");
      el.map(function(subEL) {
        subArr.innerHTML += `<li>${subEL}</li>`;
      });
      return subArr;
      //if there's object inside array , set it as descendant list
    } else if (typeof el == "object") {
      let subObj = document.createElement("ul");
      for (let [key, value] of Object.entries(el)) {
        var s = `<li>${key}: ${value}</li>`;
        subObj.innerHTML += s;
      }
      return subObj;
    } else {
      //if not, appent it just normal list
      return `<li>${el}</li>`;
    }
  });
  return items;
};

let newList = document.createElement("ul");

for (let everyItem of getAndList(arr)) {
  if (typeof everyItem == "object") {
    //list show with its descendants
    newList.innerHTML += everyItem.outerHTML;
  } else {
    newList.innerHTML += everyItem;
  }
}
document.body.append(newList);

//set timer for page and delete body immediately when timer finish
timerContainer = document.getElementById("timerContainer");
var timer = 10;
let clearPageTimer = setInterval(function() {
  timerContainer.innerHTML = timer + " SECONDS LEFT, HURRY UP DUDE!!! ";
  timer--;
  if (timer < 0) {
    timerContainer.innerHTML = "FINISHED";
    clearInterval(clearPageTimer);
    document.body.remove();
  }
}, 1000);
