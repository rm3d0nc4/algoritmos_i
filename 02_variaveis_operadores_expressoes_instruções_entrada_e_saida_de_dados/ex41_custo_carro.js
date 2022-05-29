import {input, print} from '../io_utils.js'
function main() {
print('----- Custo de um carro o consumidor -----')
    const custo_frabrica = Number(input('Digite o custo de fabricação do carro (R$):'))

    const distribuidor = custo_frabrica* 0.28
    const impostos = custo_frabrica * 0.45

    const valor_consumidor = custo_frabrica+distribuidor+impostos

    print(`O custo final ao consumidor será: R$${valor_consumidor.toFixed(2)}`)


}
main()