let n1 = Number(prompt('Digite sua primeira nota'));
let n2 = Number(prompt('Digite sua segunda nota'));
let faltas = Number(prompt('Digite sua quantidade de faltas'));

function mediaAluno(n1=0, n2=0) {
    return (n1 + n2) / 2;
}

if (mediaAluno >= 6 && faltas < 5) {
    alert(`Sua média foi: ${mediaAluno} e teve: ${faltas} faltas, então foi aprovado`);
} else alert('Você não foi aprovado');
