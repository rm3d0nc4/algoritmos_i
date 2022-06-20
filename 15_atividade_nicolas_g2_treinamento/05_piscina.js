import {ler_numero, input} from '../io_utils.js'

function main() {

    const largura = ler_numero('Digite a largura (cm)')
    const altura = ler_numero('Digite a altura (cm)')
    const profundidade = ler_numero('Digite a profundidade (cm)')

    const capacidade_total = (largura * altura * profundidade) / 1000
    const capacidade_recomendada = capacidade_total * .85

    console.log(`A piscina pode ser cheia com até ${capacidade_recomendada} litros`)

    const valor_mil_litros = ler_numero('Valor de 1000 litros de água (R$)')

    const valor_piscina_cheia = calcular_valor_encher_piscina(valor_mil_litros, capacidade_recomendada)

    console.log(`Você gastará R$ ${valor_piscina_cheia} para encher a piscina`)

    const reposicao = capacidade_recomendada * .10
    const valor_reposicao = calcular_valor_encher_piscina(valor_mil_litros, reposicao)

    console.log(`Após um mês, você tera que repor ${reposicao.toFixed(2)} litros (R$ ${valor_reposicao.toFixed(2)})`)
}

function calcular_valor_encher_piscina(valor_mil_litros , qtd_litros) {
    let valor_total
    let partes_mil_litros

    if(qtd_litros % 1000 === 0) {
        partes_mil_litros = qtd_litros / 1000
    } else {
        partes_mil_litros = Math.floor(qtd_litros / 1000) +1
    }

    valor_total = partes_mil_litros * valor_mil_litros

    return valor_total

}


main()