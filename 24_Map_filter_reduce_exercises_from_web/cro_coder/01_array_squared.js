import {ler_numero, input} from '../io_utils.js'

function main() {

    const numeros = [ 1, 2, 3, 4, 5 ]

    const numeros_elevados_ao_quadrado = numeros.map(elevar_ao_quadrado)

    console.log(numeros_elevados_ao_quadrado)
}


const elevar_ao_quadrado = n => n**2

main()