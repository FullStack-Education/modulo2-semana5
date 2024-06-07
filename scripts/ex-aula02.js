const filme1 = "Psicose"
const filme2 = "Criaturas da Noite"
const filme3 = "Carniceiros"
const filme4 = "Invocação do Mal"

// pegar a lista de filmes (tag ul)
const listaFilmes = document.getElementById("listaFilmes")

// criar os itens (tags li)
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


// função de remover filmes que iniciam com a letra C
function removerFilmesComC(){
  let total = listaFilmes.childElementCount
  for(let i = total; i > 0; i--){
    if(listaFilmes.children[i - 1].innerText[0] == "C"){
      listaFilmes.removeChild(listaFilmes.children[i - 1])
    }
  }
}