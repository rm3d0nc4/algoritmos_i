import { ler_numeros } from "../io_utils.js";

function main() {
    const [numero] = ler_numeros('um número')

    let counter = 1

    let lista_numeros = ler_numeros('os números que deseja inserir na lista')
    
    while(!esta_na_lista(numero, lista_numeros)) {

        console.log('O número inserido não está na lista!')

        counter++
        lista_numeros = ler_numeros(`os números que deseja inserir na lista (${counter}ª tentativa)`)
    }

    console.log('Número encontrado!')
}

function esta_na_lista(numero, lista_de_numero) {
    for (let numero_da_lista of lista_de_numero) {
        if(numero === numero_da_lista) {
            return true
        }
    }
    return false
}

main()