import {ler_numero, input, get_numero_aleatorio} from '../io_utils.js'

function main() {

    const tamanho = ler_numero('Tamanho do array')
    const valor_inicial = ler_numero('Valor inicial')
    const valor_final = ler_numero('Valor final')
    let item

    const vetor = new Array(tamanho).fill(0).map((_, i ,a) => a[i] = get_numero_aleatorio(valor_inicial, valor_final))
    console.log(vetor)
    
    for(let elemento of vetor) {
        vetor.forEach((_, i, a) => {
            if(a[i] > a[i+1]) {item = a[i]; a[i] = a[i+1]; a[i+1] = item;}
        })
    }
    console.log(vetor)

}

main()