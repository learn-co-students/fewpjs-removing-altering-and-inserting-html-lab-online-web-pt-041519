main = document.querySelector('main')
document.body.removeChild(main)

const newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = `YOUR-NAME is the champion`
document.body.appendChild(newHeader)
