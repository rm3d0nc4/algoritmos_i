import { ler_numeros_tipo2 } from "../io_utils.js"

function main() {
 const [numero] = ler_numeros_tipo2('Um número que contenha 4 dígitos!')
 
 const verifica_caracteristica = caracteristica(numero)
 console.log(verifica_caracteristica)

}

function caracteristica(numero) {
    const soma = extrair_primeira_dezena(numero)+extrair_segunda_dezena(numero)

    if (soma**2 === numero) {
        return 'Número obedece à característica'
    } else {
        return 'Número obedece à característica'
    }
}

const extrair_primeira_dezena = numero => (numero-(numero%100))/100
const extrair_segunda_dezena = numero => numero % 100

main()