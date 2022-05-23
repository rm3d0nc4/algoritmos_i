import { ler_numeros } from "../io_utils.js";

// Muito fácil para estar certo

function main() {
    let [x, n] = ler_numeros('dois números (X e N)')

    while( n!=2) {
        x = x/n
        console.log(`Resultado: ${x}`)
        n--
    }
}

main()