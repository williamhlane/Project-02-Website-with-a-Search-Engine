//get search box and put it in the input variable
let input = document.getElementById("searchText");
//add event listener
input.addEventListener("keyup", function (event) {
  //if the enter key is pressed
  if (event.key === "Enter") {
    event.preventDefault();
    //click the submit button
    document.getElementById("searchSubmit").click();
  }
});
//add event listener for the document key up event
document.addEventListener("keyup", function (event) {
  //if the escape key is pressed then
  if (event.key === "Escape") {
    event.preventDefault();
    //run close viewer function
    closeImageViewer();
  }
});