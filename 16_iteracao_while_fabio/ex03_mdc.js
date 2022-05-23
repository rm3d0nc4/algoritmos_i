import { ler_numeros } from "../io_utils.js";

// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA
// NÂO ENTENDI A LÓGICA


function main() {
    const [a, b] = ler_numeros('dois números (A e B)')

    const mdc = get_mdc(a,b)

    console.log(`MDC: ${mdc}`)
}

function get_mdc(n1, n2) {
    let counter = 1
    let mdc = 1

    while(n1!=1 && n2!=1) {
        if( eh_divisivel(n1, counter) && eh_divisivel(n2, counter)) {
            n1/=counter
            n2/=counter
            mdc*=counter
        } else if(eh_divisivel(n1, counter)) {
            n1/=counter
        } else if( eh_divisivel(n2, counter)) {
            n2/=counter
        }
        counter++
    }

    return mdc
}

const eh_divisivel = (numero, valor) => valor%numero === 0

main()