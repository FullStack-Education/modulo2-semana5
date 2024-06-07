// =========== Captura de valores em um formulário ===========
// Para fazer a captura de valores em um formulário, é necessário
// utilizar o método document.forms.[nomeDoFormulario].[nomeDoCampo].value

// Exemplo 01:
function typeName() {
  //Caso você queira ver o objeto form, descomente a linha abaixo
  // console.log(document.forms.registerStudent)

  // Caso você queira ver o valor do campo nome, descomente a linha abaixo
  // console.log(document.forms.registerStudent.nome.value)

  let nome = document.forms.registerStudent.nome.value;
  console.log(nome);
}

// Exemplo 02:
function typeEmail() {
  //Aqui é feita a captura do atributo value do campo que
  //possui o name igual a "email"
  let email = document.forms.registerStudent.email.value;
  console.log(email);
}

//// =========== Exercicio slide 04 pag 04 ===========
// let estudanteObj = {
//     nome: "",
//     email: "",
//     cpf:"",
//     matricula: "",
//     senha: ""
// }

// estudanteObj.nome = document.forms.cadastroAluno.nome.value;
// estudanteObj.email = document.forms.cadastroAluno.email.value;
// estudanteObj.cpf = document.forms.cadastroAluno.cpf.value;
// estudanteObj.matricula = document.forms.cadastroAluno.matricula.value;
// estudanteObj.senha = document.forms.cadastroAluno.senha.value;
// console.log("objeto", estudanteObj);

// =========== OnSubmit ===========
// O evento onSubmit é disparado quando o formulário é submetido.
// atraves do botão submit.

// Exemplo utilixando o envio de formulario e montando um objeto
// com os dados do formulario
let estudanteObj = {
  nome: "",
  email: "",
  cpf: "",
  matricula: "",
  senha: "",
};
function registrarEstudante(event) {
  estudanteObj.nome = document.forms.cadastroAluno.nome.value;
  estudanteObj.email = document.forms.cadastroAluno.email.value;
  estudanteObj.cpf = document.forms.cadastroAluno.cpf.value;
  estudanteObj.matricula = document.forms.cadastroAluno.matricula.value;
  estudanteObj.senha = document.forms.cadastroAluno.senha.value;

  if (estudanteObj.senha.length <= 7) {
    event.preventDefault(); // Impede o envio do formulário
    // Adiciona uma borda vermelha no campo senha
    document.forms.cadastroAluno.senha.style.border = "1px solid red";
    return; // Encerra a execução da função
  }
  console.log("objeto", estudanteObj);
}
