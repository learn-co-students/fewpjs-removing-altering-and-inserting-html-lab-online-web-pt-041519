// Write your code here!
// let el = document.getElementById('main');
// el.remove(); 

document.getElementById('main').remove(); 

let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.innerHTML ="is the champion"
document.body.appendChild(newHeader);