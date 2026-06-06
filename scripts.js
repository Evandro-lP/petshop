const formElemento = document.querySelector("form");
const inputsElementos = document.querySelectorAll("input");
const textAreaElemento = document.querySelector("textarea");

formElemento.addEventListener("submit", function (event){
event.preventDefault();

let valores = []

inputsElementos.forEach(function (input){
    valores.push(input.value);

});

    valores.push(textAreaElemento.value);
});