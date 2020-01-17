function setup() {
  // put setup code here
  let elements = document.getElementsByClassName("list1");


  for (let elem of elements) {
    elem.addEventListener("click",myFunction);
  }


  function myFunction(event) {
    event.target.innerHTML = "";
    // document.removeChild(event.target);
  }
}

function draw() {
  // put drawing code here

}
