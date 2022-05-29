import {ler_numeros, input} from '../io_utils.js'

function main() {

    const [valor_investimento, juros] = ler_numeros('o valor mensal do investimento e a taxa de juros')
    
    let mes = 1
    let valor_investimento_total = 0
    let intervalo = 12
    let processar_mais = 'S'

    while(processar_mais.toUpperCase() === 'S') {    
        while(mes<=intervalo) {
            valor_investimento_total+=(valor_investimento_total*(juros/100))
            valor_investimento_total+=valor_investimento
            mes++
        }

        console.log(`Saldo do investimento após ${intervalo/12} ano: ${valor_investimento_total.toFixed(2)}`)
        intervalo+=12
        processar_mais = input('Deseja processar mais um ano (S/N)? ')
    }

}

main()