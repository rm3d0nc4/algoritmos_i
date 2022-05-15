import { input } from "../io_utils.js"
function main() {

    const letra_sexo = input('Digite um sexo (M - Masculino ou F - Feminino):').toUpperCase()

    const valida_sexo = verificar_sexo(letra_sexo)

    console.log(valida_sexo)

}

function verificar_sexo(letra) {
    if (letra == 'F'){
        return 'F - Feminino'
    } else if(letra == 'M') {
        return 'M - Masculino'
    }
    return 'Sexo Inválido'
}

main()