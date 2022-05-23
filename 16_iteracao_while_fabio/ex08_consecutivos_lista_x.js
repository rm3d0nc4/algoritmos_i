import { ler_numeros } from "../io_utils.js";

function main() {
    const [numero] = ler_numeros('um número')

    let lista_de_numero = ler_numeros('os números que deseja inserir na lista')

    while(!soma_dos_ultimos_consecutivos_igual_a(numero, lista_de_numero)) {
        console.log(`A soma dos dois ultimos consecutivos não é igual a ${numero}`)
        lista_de_numero = ler_numeros('os números que deseja inserir na lista (novamente)')
    }

    console.log(`A soma dos dois ultimos números consecutivos da lista é igual a ${numero}`)
    console.log(lista_de_numero)
}

function soma_dos_ultimos_consecutivos_igual_a(numero, lista_de_numero) {
    const tamanho = lista_de_numero.length
    const ultimo = lista_de_numero[tamanho-1]
    const penultimo = lista_de_numero[tamanho-2]

    if(penultimo+ultimo=== numero) {
        return true
    }
    return false
}

main()