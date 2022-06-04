import {ler_numeros, input} from '../io_utils.js'

function main() {

    const nome = input('Nome Completo: ')
    
    const nome_passageiro = get_nome_passageiro(nome)
    console.log(nome_passageiro)
}

function get_nome_passageiro(nome) {
    const nomes = nome.split(' ')

    const primeiro_nome = nomes[0]
    const ultimo_nome = nomes[nomes.length-1]

    const nome_passageiro  = ultimo_nome+'/'+primeiro_nome
    return nome_passageiro

}

main()