// function myFunction(val) {
//   if ((val/5) > .4){
//     	document.getElementById("demo").innerHTML = Math.round(val/5);
//     }
//     else if ((val/5) <= .4) {
//     	document.getElementById("demo").innerHTML = 1;
//     }
// }


// function drawPyramid(height) {
//
//     	document.getElementById("pyramid").innerHTML = height;
//
// 			// for each row....
//     for (var row = 0; row < height; row++) {
//
//         // figure out number of bricks and spaces
//         var numBricks = row + 2;
//         var numSpaces = height - row - 1;
//
//         // build up a string for this row
//         var rowStr = "";
//         for (var i = 0; i < numSpaces; i++) {
//             var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
//             rowStr += spaceChar;
//         }
//         for (var i = 0; i < numBricks; i++) {
//             rowStr += "#";
//         }
//
//         // make a <p> element for this row, and insert it into the #pyramid container
//         rowElem = document.createElement("p");
//         rowElem.innerHTML = rowStr;
//         document.getElementById("pyramid").appendChild(rowElem);
//     }
// }

function getSelect(){
	var selection = document.getElementById("symbol");
	var option = selection.options[selection.selectedIndex].text;
	return option;
}

function getSlider(val){

	document.getElementById("pyramid").innerHTML = "";

	document.getElementById("pyramid-slide").innerHTML = val;

	printPyramid(val);
}


function printPyramid(height) {

 var space = "&nbsp".repeat(height - 1);
 var symbol = getSelect() + getSelect();
 for (count = 0; count < height; count += 1){
     var rowStr=(space + symbol);
     space = space.replace("&nbsp", "");
     symbol += getSelect();

		 rowElem = document.createElement("p");
		 rowElem.innerHTML = rowStr;
		 document.getElementById("pyramid").appendChild(rowElem);
	 }

}
