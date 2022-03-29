import {input, print} from '../io_utils.js'
function main() {
    const valor = Number(input('Insira um valor em R$:'))
    
    const setenta_por_cento = valor*0.7

    print(`70% de R$ ${valor.toFixed(2)} equivale a R$ ${setenta_por_cento.toFixed(2)}`)
}
main()