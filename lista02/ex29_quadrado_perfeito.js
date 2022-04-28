import { ler_numeros } from "../io_utils.js"

function main() {
    const [numero] = ler_numeros('Um número que contenha 4 dígitos!')

    const verifica_quadrado_perfeito = eh_quadrado_perfeito(numero)
    console.log(verifica_quadrado_perfeito)

}

function eh_quadrado_perfeito(numero) {
    const raiz_quadrada = Math.sqrt(numero)
    console.log(raiz_quadrada)
    console.log(extrair_primeira_dezena(numero))
    console.log(extrair_segunda_dezena(numero))
    const soma_das_dezenas = extrair_primeira_dezena(numero)+extrair_segunda_dezena(numero)
    console.log(soma_das_dezenas)
    if (raiz_quadrada === soma_das_dezenas) {
        return "QUADRADO PERFEITO"
    } else {
        return "QUADRADO NÃO PERFEITO"

    }
}

const extrair_primeira_dezena = numero => (numero-(numero%100))/100
const extrair_segunda_dezena = numero => numero % 100

main()