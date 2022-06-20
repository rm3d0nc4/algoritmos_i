import {ler_numero, input} from '../../io_utils.js'

// Sintaxe REDUCE

// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

// Parâmetros

// callback
// Função que é executada em cada valor no array (exceto no primeiro, se 
// nenhum valorInicial for passado); recebe quatro argumentos:

// acumulador
// É o valor inicial (ou o valor do callback anterior). Este valor 
// inicia com o valorInicial e será retornado na última iteração.

// valorAtual
// Opcional. O índice do elemento atual que está sendo processado no array. Começa a 
// partir do index 0 se um valorInicial for fornecido. Do contrário, começa do index 1.

// valorInicial
// Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da 
// função callback. Se nenhum valorInicial é fornecido, o primeiro elemento do array 
// será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() 
// em uma array vazia sem valor inicial retornará um erro.

function main() {

    const vetor = [2]

    const soma = vetor.filter(eh_positivo).reduce(somar, 0)

    console.log(soma)

}

const eh_positivo = n => n > 0
const somar = (n1, n2) => n1 + n2

main()