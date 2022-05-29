
import { ler_numeros } from './../io_utils.js';
function main() {

    let [emprestimo] = ler_numeros('o valor do empréstimo')
    let contador_dias = 0

    while(emprestimo>0) {
        emprestimo-=200
        emprestimo+=(emprestimo*.0085)
        contador_dias++
        console.log(contador_dias)
    }

    // Caso o valor do empréstimo exceda R$ 23.729,00, o valor do empréstimo
    // Nunca será quitado
    console.log(`Em ${contador_dias} dias, o empréstimo será quitado`)
}

main()