import {input, print} from '../io_utils.js'
function main() {
    print('----- Distribuindo meses -----')
    
    const meses_bruto = Number(input('Digite a quantidade de meses:'))

    const meses = meses_bruto % 12
    const anos = (meses_bruto - meses)/12

    print(`${meses_bruto} meses equivale a ${anos} anos e ${meses} meses `)
}
main()