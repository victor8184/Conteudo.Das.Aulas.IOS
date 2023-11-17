const procurarCep = async () => {
    const cep = document.querySelector('#cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const valoresEndereco = await fetch(url);
    const valores = await valoresEndereco.json(); 
    atualizarPag(valores);
} 

const atualizarPag = (valores) =>{
    document.querySelector('#endereco').value = valores.logradouro;
    document.querySelector('#bairro').value = valores.bairro;
}
//focus
document.querySelector('#cep').addEventListener('focusout', procurarCep);

