import {input, print} from '../io_utils.js'
function main() {
    print('----- Distância entre dois pontos no plano -----')

    print('<< Par ordenado 1 (x1,y1) >>')
    const x1 = Number(input('Valor x1:'))
    const y1 = Number(input('Valor y1:'))

    print('<< Par ordenado 2 (x2,y2) >>')
    const x2 = Number(input('Valor x2:'))
    const y2 = Number(input('Valor y2:'))

    const calculo1 = (x2-x1)**2
    const calculo2= (y2-y1)**2

    const calculo3 = Math.sqrt(calculo1+calculo2)

    
    print(`O ponto (${x1},${y1}) está a ${calculo3.toFixed(2)} do ponto (${x2},${y2})`) 


}
main()