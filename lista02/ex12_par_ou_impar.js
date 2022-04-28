import { ler_numeros } from './../io_utils.js';
function main() {
    const insere_numero = ler_numeros('1 número inteiro')
    const verifica_p_ou_i = par_ou_impar(insere_numero[0])
    console.log(`O número é: ${verifica_p_ou_i}`)
}

//  Questão 12
function par_ou_impar(numero) {
    if (numero%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}



main()