const filme1 = "Psicose"
const filme2 = "Criaturas da Noite"
const filme3 = "Carniceiros"
const filme4 = "Invocação do Mal"

const listaFilmes = document.getElementById("listaFilmes")

// adicionar filmes a lista
const filme1Item = document.createElement("li")
filme1Item.innerText = filme1
listaFilmes.appendChild(filme1Item)
const filme2Item = document.createElement("li")
filme2Item.innerText = filme2
listaFilmes.appendChild(filme2Item)
const filme3Item = document.createElement("li")
filme3Item.innerText = filme3
listaFilmes.appendChild(filme3Item)
const filme4Item = document.createElement("li")
filme4Item.innerText = filme4
listaFilmes.appendChild(filme4Item)

function removerFilmesComC(){
  let posicoes = []
  listaFilmes.childNodes.forEach((item, index) => {
    if(item.innerText[0] == "C"){
      posicoes.push(index)
    }
  })

  posicoes.forEach((i, index) => {
    listaFilmes.removeChild(listaFilmes.children[i - index])
  })
}