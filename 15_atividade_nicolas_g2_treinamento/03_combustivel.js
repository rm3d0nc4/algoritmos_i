import {ler_numero, input} from '../io_utils.js'

function main() {

    const preco_gasolina_bruto = ler_numero('O preço a atual da galosina (1L)')

    const preco_gasolina = preco_gasolina_bruto * .73
    const preco_alcool = preco_gasolina_bruto * .27
    const preco_petrobras = preco_gasolina_bruto * .36
    const preco_icms = preco_gasolina_bruto * .27
    const preco_etanol = preco_gasolina_bruto * .13
    const preco_outros_impostos = preco_gasolina_bruto * .1
    const preco_distribuicao_e_revenda = preco_gasolina_bruto * .14

    let resumo = '========== RESUMO =========='
    resumo += `\nPetrobrás: R$ ${preco_petrobras.toFixed(2)}`
    resumo += `\nICMS: R$ ${preco_icms.toFixed(2)}`
    resumo += `\nEtanol: R$ ${preco_etanol.toFixed(2)}`
    resumo += `\nOutros Impostos: R$ ${preco_outros_impostos.toFixed(2)}`
    resumo += `\nDistribuição e Revenda: R$ ${preco_distribuicao_e_revenda.toFixed(2)}`
    resumo+= `\n`

    console.log(resumo)

    const perc_reajuste = ler_numero('Digite o percentual de reajuste da Petrobrás')
    
    const novo_preco_gasolina = preco_gasolina + (preco_gasolina * perc_reajuste/100)
    const novo_preco_petrobras = novo_preco_gasolina * .36
    const novo_preco_icms = novo_preco_gasolina * .27
    const novo_preco_etanol = novo_preco_gasolina * .13
    const novo_preco_outros_impostos = novo_preco_gasolina * .1
    const novo_preco_distribuicao_e_revenda = novo_preco_gasolina * .14
    const novo_valor_final = novo_preco_gasolina + preco_alcool

    let novo_resumo = '========== RESUMO =========='
    novo_resumo += `\nPetrobrás: R$ ${novo_preco_petrobras.toFixed(2)}`
    novo_resumo += `\nICMS: R$ ${novo_preco_icms.toFixed(2)}`
    novo_resumo += `\nEtanol: R$ ${novo_preco_etanol.toFixed(2)}`
    novo_resumo += `\nOutros Impostos: R$ ${novo_preco_outros_impostos.toFixed(2)}`
    novo_resumo += `\nDistribuição e Revenda: R$ ${novo_preco_distribuicao_e_revenda.toFixed(2)}`
    novo_resumo += `\n Valor Final: ${novo_valor_final.toFixed(2)}`
    novo_resumo+= `\n`

    console.log(novo_resumo)


}

main()