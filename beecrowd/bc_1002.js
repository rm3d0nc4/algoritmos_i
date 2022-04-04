import {input, print} from '../io_utils.js'
function main() {
    print('----- Área do Circulo -----')

    const n = 3.14159

    const raio =  Number(input('Digite o raio do círculo:'))

    const area = (n*(raio**2)).toFixed(4)

    print(`A=${area}`)
}
main()