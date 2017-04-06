var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "green"

boxes[1].style.backgroundColor = "purple"

boxes[2].style.backgroundColor = "purple"

boxes[3].style.backgroundColor = "purple"

boxes[4].style.backgroundColor = "purple"


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

