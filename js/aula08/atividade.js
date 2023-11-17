
function imc(peso=0, altura=0) {
    return peso / (altura*altura);

}
let soma = imc(200,1.70);

if (soma < 16,9) console.log('Você está muito abaixo do peso');
else if (soma > 17 && soma < 18.4) console.log('Você está a baixo do peso');
else if (soma > 18.5 && soma < 24.9) console.log('Seu peso está normal');
else if (soma > 25 && soma < 29.9) console.log('Você está acima do peso');
else if (soma > 30 && soma < 34.9) console.log('Você está com obesidade grau 1');
else if (soma > 35 && soma < 40) console.log('Você está com obesidade grau 2');
else if (soma > 40) console.log('Você está com obesidade grau 3');



