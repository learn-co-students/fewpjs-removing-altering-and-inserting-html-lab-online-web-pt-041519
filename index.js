// Write your code here!

// remove main#main
let main = document.getElementById('main')
document.body.removeChild(main)

// new header -> creates h1
let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Ricky is the champion"