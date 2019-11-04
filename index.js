// Write your code here!
// no longer has DOM node 'main#main'
let element = document.querySelector("main#main").remove();

// has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "PamPam is the champion";
