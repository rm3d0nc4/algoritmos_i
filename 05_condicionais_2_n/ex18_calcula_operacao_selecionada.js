import {ler_numeros } from '../io_utils.js';

function main() {
    const [valor1, valor2, operacao] = ler_numeros(' 2 valores e o número da operação, separados por espaço')
    const resultado = fazer_operacao2(valor1,valor2,operacao)
    console.log(resultado)
}

// Questão 18

function fazer_operacao2(valor1, valor2, operacao) {
    if(operacao ===1){
        return valor1+valor2
    } else if(operacao ===2) {
        return valor1-valor2
    } else if(operacao===3) {
        return valor1*valor2
    } else if(operacao === 4) {
        return valor1/valor2
    }
}


main()