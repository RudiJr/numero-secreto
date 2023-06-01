const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();

function gerarNumero(){
    return parseInt(Math.random() * maiorValor + 1);
};

console.log("Número Secreto:", numeroSecreto);

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerHTML = maiorValor;