// Remove main#main
document.querySelector('main#main').remove();

// Add h1#victory with name in phrase 
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "George is the champion!";
document.body.appendChild(newHeader);

// As function
// function newHeader(name) {
//   let h1 = document.createElement('h1');
//   h1.id = "victory";
//   h1.innerHTML = `${name} is the champion!`;
//   document.body.appendChild(h1);
// }
