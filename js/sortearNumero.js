/**
 * The function generates a random integer between 1 and 1000 and assigns it to the variable
 * "numeroSecreto".
 * @returns The function `gerarNumero()` is returning a random integer between 1 and 1000 (inclusive)
 * using the `Math.random()` method and the `parseInt()` function.
 */
const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();

function gerarNumero(){
    return parseInt(Math.random() * maiorValor + 1);
};

console.log("Número Secreto:", numeroSecreto);


/* These lines of code are selecting HTML elements with the IDs "menor-valor" and "maior-valor" and
setting their innerHTML properties to the values of the variables "menorValor" and "maiorValor"
respectively. This is likely being done to display the range of possible values for the secret
number to the user. */
const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerHTML = maiorValor;