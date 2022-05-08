import { ler_numeros } from './../io_utils.js';

function main() {
    const input09 = ler_numeros('um numero inteiro, entre 0 e 100')
    const primo_ou_nao = checar_numero_primo(input09[0])
    console.log(primo_ou_nao)
}

// Questão 9
// 1ª etapa: Verificar se o número está no intervalo
// 2ª etapa: Identificar os números primos menores 
// que a raiz do ultimo número do intervalo (100)
// 3ª etapa: verificar se o número N é um dos números 
// encontrados na etapa anterior (2, 3, 5 ou 7)
// 4ª etapa: verificar se o número N é múltiplos pelo menos
//  um dos número encontrados na 2ª etapa

function checar_numero_primo(n) {
    if(n>1 && n<100){
        if(n === 2 || n === 3 || n === 5 || n === 7){
            return 'Primo'
        } else if ( n%2 !=0 && n%3 !=0 && n%5 !=0 && n%7 !=0) {
            return 'Primo'
        } else {
            return 'Não Primo'
        }
    } else {
        return 'ERRO! Verifique se o número inserido está dentro do intervalo solicitado'
    }
}


main()