import { ler_numeros } from "../io_utils.js";

function main() {

    const [nota1, nota2] = ler_numeros('duas notas')

    const media = (nota1+nota2)/2
    const conceito = get_conceito(media)
    const situacao = get_situacao(conceito)
    
    console.log(`Nota 1: ${nota1}`)
    console.log(`Nota 2: ${nota2}`)
    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Conceito: ${conceito}`)
    console.log(`Situação: ${situacao}`)

}


function get_conceito(media) {

    if(media>=9) {
        return 'A'
    } else if(media>=7.5) {
        return 'B'
    } else if(media>=6.0) {
        return 'C'
    } else if(media>=4) {
        return 'D'
    } else if(media>=0) {
        return 'E'
    }
}

function get_situacao(conceito) {

    if( conceito == 'D' || conceito == 'E') {
        return 'REPROVADO'
    } else {
        return 'APROVADO'
    }
}


main()