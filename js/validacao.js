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
                                   <h3>O número secreto era: ${numeroSecreto}</h3>`;
    }else if(numero > numeroSecreto){
       numChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`; 
    
    }else {
        numChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`; 
    }
};

function valorInvalido(numero) {
    return Number.isNaN(numero);
};

function maiorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
};
