import {ler_numero, input} from '../../io_utils.js'

function main() {

    const nome = 'George Raymond Richard Martin'

    const iniciais = nome.split(' ').map(e => e[0]).join('')

    console.log(iniciais)
}

main()