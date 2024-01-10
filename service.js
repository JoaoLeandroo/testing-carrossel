const dados = 'dados.json'
const ul = document.querySelector("ul")


fetch(dados)
    .then((resp) => resp.json())
    .then((json) => {
        const x = json.list
        x.map((todo) => {
            console.log(todo.link)
            let liElement = document.createElement("li")
            let imgElement = document.createElement("img")
            liElement.classList.add("li")

            imgElement.src = `${todo.img}`
            imgElement.classList.add("imagens")
            
            liElement.appendChild(imgElement)
            ul.appendChild(liElement)
        })
    })