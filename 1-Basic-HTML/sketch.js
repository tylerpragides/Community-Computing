function setup() {
  document.getElementById('myImg').addEventListener("click",changeImage);

  const images = ['chair.jpg', 'html.jpeg', 'websites.jpg', 'table.jp2', 'randomCircle.png'];
  let whichImage = 0;

  function changeImage() {
    document.getElementById('myImg').src = images[whichImage];
    whichImage++;
    if (whichImage >= images.length){
      whichImage = 0;
    }
  }
}

function draw() {
  document.getElementById('myImg').width = window.innerWidth;
}
