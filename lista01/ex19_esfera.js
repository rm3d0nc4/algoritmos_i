import {input, print} from '../io_utils.js'
function main() {
    print('----- Vamos calcular o volume de uma esfera -----')
    const raio = Number(input('Digite o valor do raio da esfera (em cm):'))

    const pi = 3.14

    const volume = (4*pi*(raio*raio*raio))/3

    print(`O volume da esfera é: ${volume.toFixed(2)} cm³`)

}
main()