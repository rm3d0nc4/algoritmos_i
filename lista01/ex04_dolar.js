import {input, print} from '../io_utils.js'
function main() {
    print('-----Convertendo Dólar (U$) em Real (R$)-----')
    const dolar_atual = Number(input('Digite a cotação do dólar em R$:'))
    const valor_em_dolar = Number(input('Digite o valor em U$ a ser convertido:'))
    const convertido_em_real = valor_em_dolar * dolar_atual

    print(`hoje, ${valor_em_dolar} U$ equivale a ${convertido_em_real.toFixed(2)} R$ `)
}
main()