/**
 * The function "verificaChute" checks if a given number is valid and compares it to a secret number,
 * providing feedback to the user.
 * @param chute - The parameter "chute" is a variable that represents the user's guess or input in the
 * game.
 */
function verificaChute(chute){
    const numero = +chute;
    
    if(valorInvalido(numero)){
        numChute.innerHTML += '<div>Valor Inválido!</div>';
    };

    if(maiorQuePermitido(numero)){
        numChute.innerHTML += `<div>Valor Inválido: O número precisa ser entre ${menorValor} e ${maiorValor}</div>`;
    };

    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Você Acertou</h2>
                                   <h3>O número secreto era: ${numeroSecreto}</h3>
                                   <button id="refresh" class="btn-jogar">Jogar Novamente</button>`;
    }else if(numero > numeroSecreto){
       numChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`; 
    
    }else {
        numChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`; 
    }
};


/**
 * The function checks if a given value is a valid number or not.
 * @param numero - The parameter "numero" is a value that is being checked to see if it is not a valid
 * number. The function "valorInvalido" returns true if the value is not a number (NaN), and false if
 * it is a valid number.
 * @returns The function `valorInvalido` is returning a boolean value indicating whether the input
 * `numero` is not a valid number (i.e., `NaN`).
 */
function valorInvalido(numero) {
    return Number.isNaN(numero);
};


/**
 * The function checks if a given number is greater than a maximum value or less than a minimum value.
 * @param numero - a number that is being checked if it is greater than the maximum allowed value
 * (maiorValor) or less than the minimum allowed value (menorValor).
 * @returns The function `maiorQuePermitido` is returning a boolean value that indicates whether the
 * input `numero` is greater than the value of `maiorValor` or less than the value of `menorValor`.
 */
function maiorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
};


/* This code is adding an event listener to the `body` element of the HTML document. When the user
clicks on any element inside the `body`, the function inside the event listener is executed. The
function checks if the clicked element has an `id` attribute with the value of `'refresh'`. If it
does, the function reloads the current page using the `window.location.reload()` method. This allows
the user to play the game again by clicking the "Jogar Novamente" button. */
document.body.addEventListener('click', e => {
    if(e.target.id == 'refresh'){
        window.location.reload();
    };
});
