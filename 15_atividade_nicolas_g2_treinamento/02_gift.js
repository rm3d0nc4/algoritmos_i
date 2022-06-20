import fs from 'fs'
import {ler_numero, input} from '../io_utils.js'

const arquivo = fs.readFileSync('vendas_mensais.txt', 'utf-8')

function main() {
    const vendas_mensais = arquivo.split('\n').map(linha => linha.split(' ').map(elemento => !isNaN(elemento) ? elemento = Number(elemento) : elemento = elemento))
    
    let faturamento_total = 0
    let cashback_distribuido = 0
    let maior_cashback  = 0
    let menor_cashback = Infinity
    let percentual_investido, cashback_medio, current_venda, cashback_cliente_atual

    for (let venda of vendas_mensais){
        current_venda = venda[1]

        faturamento_total += current_venda
        cashback_cliente_atual = get_cashback(current_venda)

        cashback_distribuido += cashback_cliente_atual
        
        if(cashback_cliente_atual > maior_cashback) {
            maior_cashback = cashback_cliente_atual
        }

        if(cashback_cliente_atual < menor_cashback) {
            menor_cashback = cashback_cliente_atual
        }
    }

    cashback_medio  = cashback_distribuido / vendas_mensais.length
    percentual_investido = (cashback_distribuido / faturamento_total) * 100

    console.log(`Faturamento total: ${faturamento_total.toFixed(2)}`)
    console.log(`Cashback distribuído: R$ ${cashback_distribuido.toFixed(2)}`)
    console.log(`Percentual de investimento em cashback: ${percentual_investido.toFixed(2)} `)
    console.log(`Maior cashback: R$ ${maior_cashback.toFixed(2)}`)
    console.log(`Menor cashback: R$ ${menor_cashback.toFixed(2)}`)
    console.log(`Valor médio de cashback: R$ ${cashback_medio.toFixed(2)}`)

}

function get_cashback(valor) {
    let cashback, super_cashback

    if(valor <= 250) {
        cashback = valor * .05

    } else if( valor <= 500) {
        cashback = valor * .07

    } else if(valor <= 750) {
        cashback = valor * .08

    } else {
        super_cashback = (valor - 750) * 0.25

        cashback = (250 * .05) + (500 * .07) + (750 * .08) + super_cashback
    }

    return cashback
}

main()