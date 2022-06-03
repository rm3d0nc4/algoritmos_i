import { ler_numeros, input } from "../io_utils.js";

function main() {
    const [numero] = ler_numeros('um número')

    let [n1] = ler_numeros('outro número: ')
    let [n2] = ler_numeros('outro número: ')

    while(n1+n2 !==numero) {
        n1 = n2
        n2 = Number(input('outro número: '))
    }

    console.log(`A soma dos dois ultimos números é igual a ${numero}`)
}

main()