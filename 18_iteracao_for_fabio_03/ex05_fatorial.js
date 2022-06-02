import {ler_numeros} from '../io_utils.js'

function main() {

    const  [n] = ler_numeros('um valor inteiro')

    let fatorial = 1

    for(let num =1; num<=n; num++){
        fatorial*=num
    }

    console.log(`Fatorial de ${n}: ${fatorial}`)


}

main()