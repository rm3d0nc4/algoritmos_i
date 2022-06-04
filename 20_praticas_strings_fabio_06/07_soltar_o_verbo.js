import {ler_numeros, input} from '../io_utils.js'

function main() {

    const verbo = input('Verbo:').toUpperCase()
    const conjugacao = conjugar_verbo(verbo)

    console.log(conjugacao)
}

function conjugar_verbo(verbo) {
    const prefixo = verbo.split('ER')[0]
    let conjugacao = `===== CONJUGAÇÃO DO VERBO ${verbo} =====`
    conjugacao+= `\n EU ${prefixo}O`
    conjugacao+= `\n TU ${prefixo}ES`
    conjugacao+= `\n ELE/ELA ${prefixo}E`
    conjugacao+= `\n NÓS ${prefixo}EMOS`
    conjugacao+= `\n VÓS ${prefixo}EIS`
    conjugacao+= `\n ELES/ELAS ${prefixo}EM`

    return conjugacao
}

main()