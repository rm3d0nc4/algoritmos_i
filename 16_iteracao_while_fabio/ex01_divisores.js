import { ler_numeros } from '../io_utils.js';

function main() {
    const numeros = ler_numeros('alguns números')


    for(let numero of numeros){
        const divisores = get_divisores(numero)
        console.log(divisores)     
    }
}

function get_divisores(n) {
    let divisores = `Divisores de ${n}: `
    let count = 1

    while (count<=n) {

        if(n % count === 0) {
            divisores+=`${count} `
        }
        count++
    }

    return divisores
}


main()