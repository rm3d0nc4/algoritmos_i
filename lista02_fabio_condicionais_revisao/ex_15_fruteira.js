import { ler_numeros, input } from "../io_utils.js";

function main() {
    const morango = ler_numeros('quantos quilos de morango você comprou')[0]
    const maca = ler_numeros('quantos quilos de maçã você comprou')[0]

    const valor_total = calcular_compra(maca, morango)

    console.log(`Total a pagar: R$${valor_total}`)

    
}

function calcular_compra(maca, morango) {
    let valor_morango
    let valor_maca

    if(morango>5) {
        valor_morango = 2.2
    } else {
        valor_morango = 2.5
    }

    if(maca>5){
        valor_maca = 1.5
    } else {
        valor_maca = 1.8
    }

    const valor_compra_parcial = (valor_maca*maca)+(valor_morango*morango)

    if(morango+maca>8 || valor_compra_parcial>25) {
        return  valor_compra_parcial-(valor_compra_parcial*.1)
    } else {
        return valor_compra_parcial
    }
}

main()