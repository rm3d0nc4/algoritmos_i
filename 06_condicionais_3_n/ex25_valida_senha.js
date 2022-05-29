import {ler_numeros } from './../io_utils.js';

function main() {

    const senha_acesso = ler_numeros('a senha de acesso')

    const verificar_validade = validar_senha(senha_acesso[0])

    if(verificar_validade) {
        console.log('Acesso Liberado!')
    } else {
        console.log('Acesso Negado!')
    }
}

function validar_senha(senha) {
    if(senha === 1234) {
        return true
    } else {
        return false
    }
}

main()