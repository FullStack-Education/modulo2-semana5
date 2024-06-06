// =========== Eventos ===========

// =========== Eventos de mouse ===========
function clicou(event) {
  // O parametro event é um objeto que contém informações
  // sobre o evento que ocorreu.
  console.log("Você clicou no botão");
  // event.target é o elemento que disparou o evento. Já
  // o value é o valor do elemento que disparou o evento.
  console.log(event.target.value);
}
function selecionouOpcao() {
  console.log("A opção foi alterada");
}
function mouseDown() {
  document.getElementById("try").innerHTML = "Botão pressionado";
}
function mouseUp() {
  document.getElementById("try").innerHTML = "Soltou o botão";
}

// =========== Eventos de teclado ===========
function keyDown() {
  console.log("Tecla pressionada no keydown");
}
function keyPress() {
  console.log("Tecla pressionada no keypress");
}
function keyUp() {
  console.log("Tecla pressionada no keyup");
}

// =========== Exemplo de como adicionar uma linha na tabela ===========
function perguntarDados() {
  let id = prompt("Digite seu ID:");
  let nome = prompt("Digite seu nome:");
  let idade = prompt("Digite sua idade:");
  let curso = prompt("Digite seu curso:");

  let tagTbody = document.querySelector("table.student-table tbody");
  tagTbody.innerHTML += `
    <tr>
        <td>${id}</td>
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${curso}</td>
    </tr>
    `;

  //Forma 02
  // let tagTr = document.createElement("tr");

  // let tagTdId = document.createElement("td");
  // let tagTdNome = document.createElement("td");
  // let tagTdIdade = document.createElement("td");
  // let tagTdCurso = document.createElement("td");
  // tagTdId.innerHTML = id;
  // tagTdNome.innerHTML = nome;
  // tagTdIdade.innerHTML = idade;
  // tagTdCurso.innerHTML = curso;

  // tagTr.appendChild(tagTdId);
  // tagTr.appendChild(tagTdNome);
  // tagTr.appendChild(tagTdIdade);
  // tagTr.appendChild(tagTdCurso);

  // tagTbody.appendChild(tagTr);
}

// =========== AddEventListener ===========
let tagButton = document.getElementById("clickButton");
// Forma 01
// O metodo addEventListener é utilizado para adicionar
// um evento a um elemento html.
tagButton.addEventListener("click", funcaoExterna);
function funcaoExterna(event) {
  console.log("Você clicou no botão");
  console.log(event);
}

// Forma 02
// tagButton.addEventListener("click", ()=>{
//     console.log("Você clicou no botão");
// })
