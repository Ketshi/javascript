var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "green"

boxes[1].style.backgroundColor = "purple"

boxes[2].style.backgroundColor = " #191919"

boxes[3].style.backgroundColor = "blanchedalmond"

boxes[4].style.backgroundColor = "default"


var leftMargin = 0;
var leftMargin1 = 0;
var leftMargin2 = 0;

var moveAmount = 5;
var moveAmount1 = 10;
var moveAmount2= 15;

function boxClicked() {
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[0].style.marginLeft = leftMargin + "px";
}

function box2Clicked() {
    console.log("Hey, box clicked!");
    leftMargin1 += moveAmount1;
    boxes[1].style.marginLeft = leftMargin1 + "px";
}

function box3Clicked() {
    console.log("Hey, box clicked!");
    leftMargin2 += moveAmount2;
    boxes[2].style.marginLeft = leftMargin2 + "px";
}

boxes[0].addEventListener("click", boxClicked);
boxes[1].addEventListener("click", box2Clicked);
boxes[2].addEventListener("click", box3Clicked);

