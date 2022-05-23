import { ler_numeros } from "../io_utils.js";

function main() {
    const numero = ler_numeros('um número').toString()
    console.log(numero)
    
    const qtd_caracteres = get_qtd_caracteres(numero)
    console.log(`Qtd de caracteres: ${qtd_caracteres}`)
}

function get_qtd_caracteres(numero) {
    let contador = 0

    for(let caractere of numero) {
        if(Number(caractere) === Number(caractere)) {
            contador++
        }
    }

    return contador
    

}


main()