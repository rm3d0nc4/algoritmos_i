// import {ler_numero, input} from '../io_utils.js'

function main() {

    const numero = 6
    const fatorial = gerar_vetor(numero).reduce(multiplicar)

    console.log(fatorial)

    // const fatorial2 = new Array(numero)
    // .fill(null)
    // .map((value, index) => value = index+1)
    // .reduce((p_value, c_value) => p_value * c_value)
    
    // console.log(fatorial2)
}

const multiplicar = (n1, n2) => n1 * n2

function gerar_vetor(numero) {
    let vetor = new Array(numero)

    for(let contador = 1; contador <= vetor.length; contador++){
        vetor[contador-1] = contador
    }

    return vetor
}

main()