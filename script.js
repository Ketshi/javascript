var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "blue"

boxes[2].style.backgroundColor = "yellow"



function boxClicked(){
    console.log("Hey, box clicked!");
}


boxes[0].addEventListener("click", boxClicked);
console.log(boxes[0]);