//relembrando
// let titulo = document.getElementById('teste'); ou...
// let titulo01 = document.getElementsByClassName('teste1'); ou...
//let titulo02 = document.getElementByName('teste2'); ou...
//let titulo03 = document.getElementByTagName('titulo04');
// titulo.style.color = 'gray';


//QuerySelector => p/ selecionar um elemento
let titulo = document.querySelector('#titulo');
titulo.style.color = 'blue';

//QuerySelectorAi => p/ selecionar
let par = document.querySelectorAll('p');
// par.style.color = 'red';

for(let i = 0; i < par.length; i++) {
    par[i].style.color = 'blue';
}
