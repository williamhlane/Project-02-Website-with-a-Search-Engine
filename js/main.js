//This function will show the gifs in the div using the values in the search text box
let showSearchResults = () => {
  let sections;
  //Get value of the search textbox and put it in a value searchBox
  let searchBox = document.getElementById("searchText").value;
  //searchGiphy api using fetch
  fetch('https://api.giphy.com/v1/gifs/search?api_key=FQWp0dGlXW9H0IAChHdmCHWPbQCbCCUq&q=' + searchBox)
    .then((res) => {
      return res.json()
    }).then((json) => {
      //These lines are used for diagnostics, that is why they are commented out
      //console.log(json + json.data + json.data[0] + json.data[0].images);
      //console.log(json.data);
      let spans = "";
      let timesRun = 0;
      //run the data from the json through a loop
      for (let ri of json.data) {
        timesRun += 1;
        let imgUrl = ri.images.original.url;
        let previewUrl = ri.images.preview_gif.url;
        //spans variable will be put in the div when a search is complete
        spans += "<span>" + '<a onclick="' + "showFullImage('" + imgUrl + "')" + '">' + "<img src=" + '"'
          + previewUrl + '"' + " /> </span></a>";
        //This lines are used for diagnostics, that is why they are commented out
        //console.log(spans);
      }
      //Get span and put them in a variable
      let spansDiv = document.getElementsByTagName('div');
      spansDiv[1].innerHTML = spans;
      //If the loop was not run then display this in the div instead.
      if (timesRun == 0) {
        spansDiv[1].innerHTML = "<div><h1>No results found.</h1></div>";
      }
    })
}
let showFullImage = (imgUrl) => {
  document.getElementById("imageViewer").style.display = "block";
  document.getElementById("fullSizeImg").src = imgUrl;


}
let closeImageViewer = () => {
  document.getElementById("imageViewer").style.display = "none";

}
