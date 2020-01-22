function setup() {
  // put setup code here
  let elements = document.getElementsByClassName("list1");
  document.getElementById('myHeader').addEventListener("click",changeFontSize);

  for (let elem of elements) {
    elem.addEventListener("click",myFunction);
  }

  function myFunction(event) {
    event.target.innerHTML = "";
    // document.removeChild(event.target);
  }

  function changeFontSize() {
    document.getElementById('myHeader').style.fontSize = "10px";
  }
}

function draw() {
  // put drawing code here
  let imgObject = document.getElementById("myImg");
  imgObject.width = window.innerWidth / 2;

  let textObject = document.getElementById("myText");
  textObject.width = window.innerWidth / 2;
}
