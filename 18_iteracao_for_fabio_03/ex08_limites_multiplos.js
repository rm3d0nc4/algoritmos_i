import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um valor inteiro')
    const [l_superior] = ler_numeros('limite superior')
    const [l_inferior] = ler_numeros('limite inferior')

    
    console.log('Múltiplos superiores:')


    console.log('Múltiplos superiores:')
    for(let counter = n+1; counter<=l_superior;counter++){
        if(eh_multiplo(n, counter)){
            console.log(counter)
        }
    }

    console.log('Múltiplos inferiores')
    for(let counter = n-1; counter>=l_inferior;counter--){
        if(eh_multiplo(n, counter)){
            console.log(counter)
        }
    }

}

const eh_multiplo = (n1, n2) => n1%n2===0 || n2%n1===0

main()