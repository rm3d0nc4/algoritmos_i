import {input, print} from '../io_utils.js'
function main() {
    print('----- Calculando uma equação liner -----')
    
    const coeficiente_a = Number(input('Valor do coeficiente a:'))
    const coeficiente_b = Number(input('Valor do coeficiente b:'))
    const coeficiente_c = Number(input('Valor do coeficiente c:'))
    const coeficiente_d = Number(input('Valor do coeficiente d:'))
    const coeficiente_e = Number(input('Valor do coeficiente e:'))
    const coeficiente_f = Number(input('Valor do coeficiente f:'))

    const calculo1 = ((coeficiente_c*coeficiente_e) - (coeficiente_b*coeficiente_f))
    const calculo2 = ((coeficiente_a*coeficiente_e) - (coeficiente_b*coeficiente_d))
    const calculo3 = ((coeficiente_a*coeficiente_f) - (coeficiente_c*coeficiente_d))
    const calculo4 = ((coeficiente_a*coeficiente_e) - (coeficiente_b*coeficiente_d))

    const valor_de_x = calculo1/calculo2
    const valor_de_y = calculo3/calculo4

    print(`O par ordenado (x,y) da equação é igual a (${valor_de_x.toFixed(2)},${valor_de_y.toFixed(2)})`)
}
main()