import { ler_numeros } from "../io_utils.js";

function main() {

    const [n1, n2] = ler_numeros('dois números par fazer uma multiplicação')
    
    let counter = 1
    let multiplicacao = 0

    while( counter<=n2) {
        multiplicacao+=n1
        counter++
    }

    console.log(`Resultado: ${multiplicacao}`)
}

main()