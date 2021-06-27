var req = new XMLHttpRequest();
req.open("GET", "./json/img.json");
req.onreadystatechange = function (){
  if(this.readyState == 4) {
    // console.log(this.response)
    var data = JSON.parse(this.response);
    for(var i =0; i<data.length; i++){
      div = document.createElement("div")
      document.body.children[1].children[2].appendChild(div);
      div.setAttribute("class","gallery");
      div.onclick = function(){
        this.classList.toggle("image-selected");
      }
      var img = document.createElement("img");
      img.src = data[i];
      img.setAttribute("class","galleryImg");
      div.appendChild(img);
      img.onmouseover = function() {
        var element = this;
        this.timerId = setTimeout(function(){
          element.classList.add("image-magnified");        
        }, 1000)
      }
      img.onmouseout = function() {
      clearTimeout(this.timerId)
      this.classList.remove("image-magnified");  
      }
    }
  }
}
req.send();

function selectAll(btn) {
  var images = document.getElementsByClassName("gallery");
  for (var i = 0; i< images.length; i++){
    if(btn.value == "UNSELECTED ALL") {
      images[i].classList.remove("image-selected");
    } else {
      images[i].classList.add("image-selected");
    }
  }
  if (btn.value == "UNSELECTED ALL"){
    btn.value = "SELECTED ALL";
  } else {
    btn.value = "UNSELECTED ALL";
  }
}

function showSlide(btn) {
  var images = document.getElementsByClassName("gallery");
  var index = 0;
  images[index].classList.add("image-magnified"); 
    var intervalId = setInterval(function(){
    images[index].classList.remove("image-magnified");
    index++;
    if(index < images.length) {
      images[index].classList.add("image-magnified"); 
    } else {
      clearTimeout(intervalId)
    }
  }, 1000)
}

