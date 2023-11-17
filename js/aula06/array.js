//unidimensional
const frutas = new Array('maça', 'banana', 'pera');
console.log(`Suas fruta favoritas são:${frutas}`);

const grupo3 = ['Daniel', 'Victor', 'Gabriel', 'Caique', 'Nei'];
console.log(grupo3);

// bidimensional
let carros = ['uno', 'celta', 'gol'];

let gruposTcc = [
    ['gabriel', 'daniel', 'aluno1'],
    ['benjamim', 'dias', 'aluno2'],
    ['lucas', 'davi', 'aluno3'],
]
console.log(gruposTcc[1][0]); //dentro da primeira chave indica o primeiro array e o segundo a posição do segundo array

carros[1] = "palio";
console.log(carros);

//Convertendo p/ string
let idadeAlunos = [15, 25, 16, 22, 18]
let idadeTexto = idadeAlunos.toString();
console.log(typeof idadeTexto);
console.log(idadeTexto.length);

//Inserir e remover um elemento
let idadeAluno = [15, 25, 16, 22, 18]
 let novoArray = idadeAluno.join("-");
 console.log(novoArray);



 //Pop() - Remover um elemento da última posição do seu array

 //Push() - Adicionar um elemento na última posição do seu array
let mercado = ['morango', 'banana', 'uva', 'pera', 'maça']
let fruta1 = mercado.pop();
console.log(fruta1);
console.log(mercado.length);
console.log(mercado);
let fruta2 = mercado.push("abacaxi");
console.log(mercado);

//shift - Remove um elemento na primeira posição do seu array
//unshift - Adiciona um elemento na primeira posição do seu array
mercado.shift() //tirou o morango
console.log(mercado)
let fruta3 =  mercado.unshift('carambola');
console.log(mercado);


//delete - usado para remover um elemento em uma posição específica
delete mercado[1]
console.log(mercado)

