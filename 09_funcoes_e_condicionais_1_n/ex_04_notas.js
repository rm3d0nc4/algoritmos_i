import { ler_numeros } from "../io_utils.js";

function main() {
    const [nota1, nota2] = ler_numeros('Duas notas')

    const resultado = get_resultado(nota1,nota2)

    console.log(resultado)
}

function get_resultado(nota1, nota2) {
    const media = (nota1+nota2)/2

    if(media===10) {
        return 'Aprovado com Distinção'
    } else if(media>=7) {
        return 'Aprovado'
    }
    return 'Reprovado'
}

main()