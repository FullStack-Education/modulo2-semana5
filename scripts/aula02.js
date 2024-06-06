// =========== CreateElement =========== 
// Forma 01: Adicionar elementos no HTML usando appendChild
let tagUl = document.getElementById('list');
console.log("tag Ul - ", tagUl);

let tagLi = document.createElement('li');
tagLi.innerText = "Item 4";
tagLi.classList.add('item');
console.log("tag Li - ", tagLi);
// =========== AppendChild =========== 
tagUl.appendChild(tagLi);


// =========== InnerHTML ===========
// Forma 02: Adicionar elementos no HTML usando innerHTML
tagUl.innerHTML += "<li class='item'>Item 4</li>";

// Diferentes maneiras de manipular o conteúdo de elementos
console.log("textContent", tagUl.textContent);  // Obtém o texto completo, incluindo texto escondido
console.log("innerText", tagUl.innerText);      // Obtém apenas o texto visível ao usuário
console.log("innerHTML", tagUl.innerHTML);      // Obtém o HTML interno

//Exemplo 02:
// Usando setAttribute para adicionar atributos a um elemento
let tagForm = document.getElementById("formRegistro");
let tagInput = document.createElement("input");
// <input />

// =========== SetAttribute =========== 
tagInput.setAttribute("type", "text");
// <input type="text" />
tagInput.setAttribute("name", "nome");
// <input type="text" name="nome" />
tagInput.setAttribute("id", "name");
// <input type="text" name="nome" id="name" />
tagInput.setAttribute("class", "input validate");
// <input type="text" name="nome" id="name" class="input validate" />

tagForm.appendChild(tagInput);  // Adiciona o input ao formulário

// =========== GetAttribute ===========
// Usando getAttribute para obter o valor de um atributo
let tagInputEmail = document.getElementById("email");
console.log("Tipo do input email: ", tagInputEmail.getAttribute("type"));


// =========== RemoveChild ===========
// Usando removeChild para remover elementos do DOM
let tagForm2 = document.getElementById("formRegistro");
console.log("Formulário antes da remoção: ", tagForm2);

// Remover elementos específicos pelo índice dos filhos
if (tagForm2.children.length > 16) {
    tagForm2.removeChild(tagForm2.children[16]);
}
console.log("Formulário após remover o filho 16: ", tagForm2.children);

if (tagForm2.children.length > 17) {
    tagForm2.removeChild(tagForm2.children[17]);
}
console.log("Formulário após remover o filho 17: ", tagForm2.children);


// =========== CloneNode ===========
// Usando cloneNode para clonar elementos do DOM

let tagItem = document.querySelector("ul#list li");
let li = tagItem.cloneNode();
console.log(li); // <li></li>
// Para clonar o conteúdo interno do elemento, passamos 
// true como argumento
let liFull = tagItem.cloneNode(true); 
console.log(liFull); // <li>Pão</li>