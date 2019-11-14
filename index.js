main = document.querySelector('main'); // find DOM node 'main'
document.body.removeChild(main); // find parent 'body' and remove child 'main'

let newHeader = document.createElement('h1'); // create newHeader var
newHeader.setAttribute('id', 'victory'); // set newHeader id to 'victory'
newHeader.innerHTML = 'Kelypso is the champion'; // set inner HTML
document.body.appendChild(newHeader); // append newHeader to the body
