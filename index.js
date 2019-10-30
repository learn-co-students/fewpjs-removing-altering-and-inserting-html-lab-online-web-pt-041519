// document.addEventListener("DOMContentLoaded", () => {

    let main = document.querySelector("main#main")
    main.remove()

    let newHeader = document.createElement('h1')
    newHeader.id = "victory"
    newHeader.innerHTML = "Micah is the champion"
    document.body.appendChild(newHeader)


// })