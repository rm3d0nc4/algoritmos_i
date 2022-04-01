import {input, print} from '../io_utils.js'
function main() {
    print('----- Calculando desperdício com cigarro -----')

    const anos = Number(input('Há quantos anos você fuma:'))
    const n_cigarros = Number(input('Quantidade de cigarros que você fuma por dia:'))
    const preco_carteira = Number(input('Custo de uma carteira de cigarros(em R$):'))

    const gasto_diario = (n_cigarros/20)*preco_carteira
    const gasto_anual = anos*365*gasto_diario

    print(`Como fumante, você desperciçou R$${gasto_anual.toFixed(2)}`)
    print('Veja o estado do seu pulmão: https://imagens.brasil.elpais.com/resizer/UVuoCrXnVB3sWEIOyp3sSssaYq4=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/KUV5IYHB5RQRQK2TGU2H5IGNSU.jpg')
}
main()