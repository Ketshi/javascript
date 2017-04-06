var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "green"

boxes[1].style.backgroundColor = "purple"

boxes[2].style.backgroundColor = " #191919"

boxes[3].style.backgroundColor = "blanchedalmond"

boxes[4].style.backgroundColor = "default"


var leftMargin = 0;

var moveAmount = 5;
function boxClicked() {
    console.log("Hey, box clicked!");



    if (leftMargin < 100) {
        leftMargin += moveAmount;

    }
    leftMargin += moveAmount;


    boxes[0].style.marginLeft = leftMargin + "px";

}
boxes[0].addEventListener("click", boxClicked);
console.log(boxes[0]);


var moveAmount = 10;
function boxClicked() {
    console.log("Hey, box clicked!");



    if (leftMargin < 100) {
        leftMargin += moveAmount;

    }
    leftMargin += moveAmount;


    boxes[1].style.marginLeft = leftMargin + "px";

}
boxes[1].addEventListener("clickOne", boxClicked);
console.log(boxes[1]);