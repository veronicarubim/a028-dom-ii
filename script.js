// crie uma função
// essa função tem q ser acionada no clique do botão
// quando clicar no botão, tem q ser adicionado um item no article dentro do main

// Exercício 1

function adicionaItem (event) {
    const newItem = document.createElement("article")
    const newContent = document.createTextNode("Texto de Teste")
    newItem.appendChild(newContent)

    const currentItem = document.getElementById("container")
    currentItem.insertAdjacentElement('beforeend', newItem)

    newItem.setAttribute("class", "item")
    newItem.addEventListener('click', (event)=> removeItem(event))

}

// Exercício 3

function removeItem (event) {
    const item = event.target
    item.remove()
}

newItem.addEventListener('click', (event)=> removeItem(event))