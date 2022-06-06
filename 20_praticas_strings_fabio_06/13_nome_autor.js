import {ler_numeros, input} from '../io_utils.js'

function main() {

    const nome = input('Nome: ')

    const bibliografia = gerar_nome_bibliografico(nome)
    console.log(bibliografia)
}

function gerar_nome_bibliografico(nome){
    const nomes = nome.split(' ')
    const ultimo_nome = nomes[nomes.length-1]
    let iniciais = ''
    let inicial

    for(let nome = 0; nome<nomes.length-1; nome++){

        if(primeira_letra_eh_maiuscula(nomes[nome])){
            inicial = pegar_inicial(nomes[nome])
            iniciais+= ` ${inicial}.`

        }
    }

    const nome_bibliografico = `${ultimo_nome},${iniciais}`

    return nome_bibliografico

}

const pegar_inicial = str => str[0]
const primeira_letra_eh_maiuscula = str => str[0] === str[0].toUpperCase()

main()