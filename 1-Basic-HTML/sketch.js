function setup() {

  // var canvas = document.getElementById("myCanvas");
  // var ctx = canvas.getContext("2d");
  // ctx.fillStyle = "black";
  // ctx.fillRect(0,0,canvas.width,canvas.height)
  //
  // document.getElementById("myCanvas").addEventListener('click',drawDot);
  //
  // function drawDot(){
  //   ctx.beginPath()
  //   ctx.strokeStyle = "red";
  //   var rawX = event.clientX;
  //   var rawY = event.clientY;
  //   var fixedX = (rawX - (window.innerWidth - canvas.width) / 2);
  //   ctx.arc(fixedX,event.clientY,5,0,2 * Math.PI);
  //   ctx.stroke()
  // }

  document.getElementById('myImg').addEventListener("click",changeImage);

  const images = ['chair.jpg', 'html.jpeg', 'websites.jpg', 'table.jp2', 'randomCircle.png'];
  let whichImage = 0;

  function changeImage() {
    document.getElementById('myImg').src = images[whichImage % images.length];
    whichImage++;
    if (whichImage >= images.length){
      whichImage = 0;
    }
  }
}

function draw() {
  document.getElementById('myImg').width = window.innerWidth;
}
