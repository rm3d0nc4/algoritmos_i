import { ler_numeros } from "../io_utils.js";

function main() {
    const [numero1, numero2] = ler_numeros('dois números (A e B)')

    const mmc = get_mmc(numero1,numero2)

    console.log(`MMC: ${mmc}`)
}

function get_mmc(n1, n2) {
    let counter = 1
    
    while(!(is_multiplo(n1, counter) && is_multiplo(n2, counter))) {
        counter++
    }

    return counter
}

const is_multiplo = (numero, valor) => valor%numero===0

main()