let ol = 10;
let oh = 10;
let index = 0;
let wh = 50;

console.log(ol, oh);

const circleDiv = document.getElementById("circle");
var circleInterval;

const color = ["red", "green", "blue", "yellow", "brown", "gray"];

// var circleInterval = setInterval(circleAnimation, 50);

// Testing whether the element is in viewport
const isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

// function circleAnimation() {
//   if (ol >= 4000 / 50) {
//     // circleDiv.style.backgroundColor = "lightgrey";
//     circleDiv.style.backgroundColor = color[index];
//     clearInterval(circleInterval);
//   } else {
//     ol++;
//     index++;
//     circleDiv.style.left = ol + "px";
//     circleDiv.style.backgroundColor = color[index];
//   }
// }

//WITHOUT setInterval()
function circleNew() {
  if (isInViewport(circleDiv)) {
    ol++;
    circleDiv.style.left = ol + "px";
    circleDiv.style.top = oh + "px";
    circleDiv.style.width = wh + "px";
    circleDiv.style.height = wh + "px";
    circleDiv.style.backgroundColor = color[index];
    circleInterval = requestAnimationFrame(circleNew);
  } else {
    circleDiv.style.backgroundColor = "white";
    cancelAnimationFrame(circleNew);
    ol = randomFunc(900, 0);
    oh = randomFunc(100, 0);
    wh = randomFunc(200, 20);
    index = randomFunc(5, 0);
    circleDiv.style.top = oh + "px";
    circleDiv.style.width = wh + "px";
    circleDiv.style.height = wh + "px";
    circleDiv.style.backgroundColor = color[index];
    circleInterval = requestAnimationFrame(circleNew);
  }
}

circleInterval = requestAnimationFrame(circleNew);

function randomFunc(num1, num2) {
  const rand = Math.floor(Math.random() * num1 + num2);
  return rand;
}
