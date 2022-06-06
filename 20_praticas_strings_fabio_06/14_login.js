import {ler_numeros, input} from '../io_utils.js'

function main() {

    const nome = input('Nome:')
    const login = get_login(nome)

    console.log(`Login: ${login}`)
}

function get_login(nome) {
    const nomes = nome.split(' ')
    let login = ''

    for(nome of nomes){

        if(primeira_letra_eh_maiuscula(nome)){
            login+= pegar_inicial(nome).toLowerCase()

        }
    }

    return login
}

const pegar_inicial = str => str[0]
const primeira_letra_eh_maiuscula = str => str[0] === str[0].toUpperCase()



main()