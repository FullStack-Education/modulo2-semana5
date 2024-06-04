// =========== Capturas feitas por seletores =========== 
// Para capturar elementos do HTML, podemos utilizar seletores. 
// Mas tambem podemos capturar elementos por tag, classe e id.

// Captura po nome da tag
console.log(document.getElementsByTagName("h3"));

// Captura por nome da classe
console.log(document.getElementsByClassName("paragrafo"));

// Captura por id
console.log(document.getElementById("titulo"));


// Exercicio slide 01 pag 10 e 11
let cardsService = document.getElementsByClassName("service");
console.log(cardsService);

let sectionService = document.getElementById("services");
console.log(sectionService);


//  =========== QuerySelector =========== 
// Para capturar um elemento html podemos utilizar o querySelector.
// Ele é um método que retorna o primeiro elemento que combina com o seletor CSS especificado.

// Exemplo 01
let tagStrong = document.querySelector("#curiosidades .paragrafo strong");
// html que irá corresponder com a sequencia de seletores CSS
// <element id="curiosidades">
//     <element class="paragrafo">
//         <strong>Texto em negrito</strong>
//     </element>
// </element>
console.log(tagStrong);


//  =========== .value  =========== 
// Para capturar o valor de um input, podemos utilizar a propriedade value.

// Exemplo 01
let inputIdNome = document.getElementById("nome").value;
// Outra forma de captura de valor de input é:
// document.querySelector("#nome").value;
console.log(inputIdNome);

// Exemplo 02
let inputIdEmail = document.getElementById("email").name;
// Outra forma de captura de valor de input é:
// document.querySelector("#email").value;
console.log(inputIdEmail);


//  =========== .attributes  ===========
// Para capturar os atributos de um elemento, podemos utilizar a propriedade attributes.
// Ela retorna um objeto com todos os atributos do elemento.

// Exemplo 01
let tagLabel = document.getElementsByTagName("label")[0];
// Como getElementsByTagName retorna um array, é necessário informar o índice do 
// elemento que queremos capturar.

// Como o attributes retorna um objeto, podemos acessar os atributos do elemento
// através de seu nome.
// Como:
// console.log(tagLabel.attributes.for);
// ou
// console.log(tagLabel.attributes[0]);