import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let resultado = 0 

    for(let counter=1;counter<=n;counter++){
        resultado+=(1/counter)
        counter++
        resultado-=(1/counter)
    }

    console.log(`Resultado: ${resultado}`)
}

main()