import {ler_numeros, input} from '../io_utils.js'

function main() {

    const senha = input('Senha: ')
    let senha_oculta = ''
    let tentativa

    for(let elemento of senha){
        senha_oculta+='*'
    }

    tentativa = input('Digite a possível senha: ')

    while(tentativa !== senha){
        console.log('Senha incorreta!')
        console.log(`Dica: ${senha_oculta}`)

        tentativa = input('Digite a possível senha: ')
    }

    console.log('Senha  correta!')

}

main()