import { input } from "../io_utils.js";

function main() {
    const letra = input('Digite uma letra:').toLowerCase()
    console.log(letra)
    const verificacao = verificar_letra(letra)
    console.log(verificacao)
}

function verificar_letra(letra) {
    const vogais = ['a','e','i','o','u']
    for (let vogal of vogais) {
        if( vogal === letra){

            return 'Vogal'
        }
    }
    return 'Consoante'
}
main()