let n1 = 9;
let n2 = 8;
let media = (n1 + n2) / 2;

console.log(`Sua média é ${media}`);


//Function
function mediaAluno(nota1 = 0, nota2 = 0) { //igualar p/ setar valor padrão caso o usuario nn digite nada
    return (nota1 + nota2) / 2;
}

console.log((mediaAluno(9,8).toFixed(3))); //to.fixed() - serve para fixar o número duas casas depois da vírgula


//arrow function
let mAluno =  (nt1, nt2) => {
    return (nt1 + nt2) / 2;
};
console.log(`Sua média é: ${mAluno(5,10)}`);