import { input, ler_numeros } from "../io_utils.js";

function main() {
    const tipo = input('Digite o tipo de combustível(A - álcool, G - gasolina ):').toUpperCase()
    const litros = ler_numeros('quantos litros você irá comprar')[0]

    const valor = get_valor(tipo, litros)
    console.log(`Total a ser pago: R$${valor}`)
}

function get_valor(tipo, qtd_litros) {
    let valor
    if (tipo === 'G') {

        if(qtd_litros>20) {
            valor = (2.5-(2.5*0.06))*qtd_litros
        } else {
            valor = (2.5-(2.5*0.04))*qtd_litros
        }
        return valor.toFixed(2)

    } else if (tipo === 'A') {

        if(qtd_litros>20) {
            valor = (1.9-(1.9*0.05))*qtd_litros
        } else {
            valor = (1.9-(1.9*0.03))*qtd_litros
        }
        return valor.toFixed(2)

    } else {
        return 'Identicador inválido'
    }
}

main()