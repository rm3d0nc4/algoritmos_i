import { ler_numeros, input } from './../io_utils.js';

function main() {
    const carne = input('Tipo de carne (F - filé, A - alcatra, P - picanha):').toUpperCase()
    const qtd_carne = ler_numeros('a quantidade de carne(em KG)')
    const pagamento = input('Pagamento(C- crédito, D - débito, E - espécie,  CT - Cartão Tabajara):').toUpperCase()
    const forma_pagamento = get_forma_pagamento(pagamento)

    const [nome_carne, valor_carne] = get_valor_e_nome_da_carne(carne, qtd_carne)
    let desconto = 0

    if(pagamento==='CT') [
        desconto = valor_carne*.05
    ]
    
    const total_a_pagar = valor_carne-desconto

    const nota_fiscal = gerar_nota_fiscal(nome_carne, qtd_carne, valor_carne, forma_pagamento, desconto, total_a_pagar)
    console.log(nota_fiscal)
}

function get_valor_e_nome_da_carne(carne, qtd_carne) {
    let valor_carne
    let nome_carne
    if(carne ==='F'){
        nome_carne = 'Filé'
        if(qtd_carne>5) {
            valor_carne = 5.8
        } else {
            4.9
        }
    } else if(carne==='A'){
        nome_carne = 'Alcatra'
        if(qtd_carne>5) {
            valor_carne = 6.8
        } else {
            5.9
        }
    } else if(carne==='P'){
        nome_carne = 'Picanha'
        if(qtd_carne>5) {
            valor_carne = 7.8
        } else {
            6.9
        }
    }

    const valor_parcial = valor_carne*qtd_carne

    return [nome_carne,valor_parcial]
}

function get_forma_pagamento(tipo) {
    if (tipo === 'C') {
        return 'Crédito'
    } else if (tipo==='D') {
        return 'Débito'
    } else if (tipo==='E') {
        return 'Espécie'
    } else if (tipo==='CT') {
        return 'Cartão Tabajara'
    }
}

function gerar_nota_fiscal(nome_carne, qtd_carne, valor_carne, forma_pagamento, desconto, total_a_pagar) {
    
    let nota_fiscal = '========== NOTA FISCAL =========='
    nota_fiscal+=`\n tipo ....................... ${nome_carne}`
    nota_fiscal+=`\n qtd ....................... ${qtd_carne} KG`
    nota_fiscal+=`\n subtotal ....................... R$${valor_carne.toFixed(2)}`
    nota_fiscal+=`\n pagamento ....................... ${forma_pagamento}`
    nota_fiscal+=`\n desconto ....................... R$${desconto.toFixed(2)}`
    nota_fiscal+=`\n total a pagar .......................R$${total_a_pagar.toFixed(2)}`
    
    return nota_fiscal 
}

main()