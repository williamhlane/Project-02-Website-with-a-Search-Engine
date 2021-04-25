let showSearchResults = () => {
  let sections;
  //Get value of the search textbox and put it in a value searchBox
  let searchBox = document.getElementById("searchText").value;
  //searchGiphy api using fetch
  fetch('https://api.giphy.com/v1/gifs/search?api_key=FQWp0dGlXW9H0IAChHdmCHWPbQCbCCUq&q=' + searchBox)
    .then((res) => {
      return res.json()
    }).then((json) => {
     // console.log(json + json.data + json.data[0] + json.data[0].images);
      let spans = "";
      for (let ri of json.data) {
        let imgUrl = ri.images.original.url;
        spans += "<span><img src=" + '"' + imgUrl + '"' + " /> </span>";
        console.log(imgUrl + spans);
        //undefined
      }
      let spansDiv = document.getElementsByTagName('div');
      spansDiv[1].innerHTML = spans;
    })





}