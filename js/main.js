let showSearchResults = () => {
  let sections;
  //Get value of the search textbox and put it in a value searchBox
  let searchBox = document.getElementById("searchText").value;
  //searchGiphy api using fetch
  fetch('https://api.giphy.com/v1/gifs/search?api_key=FQWp0dGlXW9H0IAChHdmCHWPbQCbCCUq&q=' + searchBox)
    .then((res) => {
      return res.json()
    }).then((json) => {
      //console.log(json + json.data + json.data[0] + json.data[0].images);
      //console.log(json.data);
      let spans = "";
      let timesRun = 0;
      for (let ri of json.data) {
        timesRun += 1;
        let imgUrl = ri.images.original.url;
        let previewUrl = ri.images.preview_gif.url;

        spans += "<span>" + '<a onclick="' + "showFullImage('" + imgUrl + "')" + '">' + "<img src=" + '"'
          + previewUrl + '"' + " /> </span></a>";
        //console.log(spans);
      }
      console.log(timesRun);
      let spansDiv = document.getElementsByTagName('div');
      spansDiv[1].innerHTML = spans;
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
