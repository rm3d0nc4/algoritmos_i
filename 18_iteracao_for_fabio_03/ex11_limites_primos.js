import {ler_numeros} from '../io_utils.js'

function main() {

    const l_superior = ler_numeros('o limite superior')
    const l_inferior = ler_numeros('o limite inferior')

    for(let counter = l_inferior; counter<=l_superior; counter++){
        if(eh_primo(counter)){
            console.log(counter)
        }
    }
}

function eh_primo(n){
    if(n===1 || n===-1){
        return false
    } else if(n === 2 || n === 3 || n === 5 || n === 7){
        return true
    } else if(n === -2 || n === -3 || n === -5 || n === -7){
        return true
    } else if ( n%2 !=0 && n%3 !=0 && n%5 !=0 && n%7 !=0) {
        return true
    } else if( n%-2 !=0 && n%-3 !=0 && n%-5 !=0 && n%-7 !=0){
        return true
    } else {
        return false
    }
}
main()