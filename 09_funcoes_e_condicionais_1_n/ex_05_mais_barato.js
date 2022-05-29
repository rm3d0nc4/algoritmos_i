import { ler_numeros } from "../io_utils.js";

function main() {
    const [p1,p2,p3] = ler_numeros('o valor do Produto 1, do Produto 2 e do Produto 3, respectivamente')

    const mar_barato = get_marba(p1,p2,p3)
    console.log(`Mais barato: Produto ${mar_barato[1]} (R$ ${mar_barato[0].toFixed(2)})`)
}

function get_marba(p1,p2,p3) {
    let mar_ba = p1
    let n_produto = 1

    if(p2<mar_ba) {
        mar_ba = p2
        n_produto = 2

    }

    if(p3<mar_ba) {
        mar_ba = p3
        n_produto = 3
    }

    return [mar_ba, n_produto]
}

main()