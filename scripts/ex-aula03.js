function favoritar(){
  alert("Item adicionado aos favoritos!")
}

const inputNome = document.getElementById("nome")
inputNome.addEventListener("input", function (){
  if(inputNome.value.length < 8){
    inputNome.style.borderColor = "red"
  } else {
    inputNome.style.borderColor = "#ccc"
  }
})