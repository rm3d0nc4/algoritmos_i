import {ler_numeros, input} from '../io_utils.js'

function main() {

    let total_compra = 0

    let nome_produto

    while (true) {
        nome_produto = input('Nome do produto:')

        if(nome_produto==='FIM') {
            break
        }

        let [preco, quantidade] = ler_numeros(`o preço unitário e a quantidade comprada de ${nome_produto}`)
        const subtotal = get_desconto(preco, quantidade)

        total_compra+=subtotal

    }

    console.log(`Valor total da compra (com os descontos): ${total_compra.toFixed(2)}`)
}

function get_desconto( preco, qtd) {

    if(qtd>50){
        const desconto = preco*.25
        preco-=desconto
        return preco*qtd

    } else if(qtd>20){
        const desconto = preco*.2
        preco-=desconto
        return preco*qtd

    } else if(qtd>10){
        const desconto = preco*.1
        preco-=desconto
        return preco*qtd

    } else {
        return preco*qtd
    }

}
main()