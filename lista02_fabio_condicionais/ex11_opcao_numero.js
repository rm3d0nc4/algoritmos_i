import { ler_numeros } from './../io_utils.js';

function main() {
    const opcao = ler_numeros('1 número(1, 2 ou 3)')
    const numeros = ler_numeros('3números, separados por espaço')
    const opcao_escolhida = identifica_opcao(opcao[0], numeros[0],numeros[1],numeros[2])
    console.log(`Opção escolhida: ${opcao_escolhida}`)
}

// Questão 11
function identifica_opcao(opcao, num1,num2,num3) {
    if(opcao === 1) {
        return num1
    } else if(opcao === 2) {
        return num2
    } else if(opcao === 3) {
        return num3
    }
}

main()