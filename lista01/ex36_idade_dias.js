import {input, print} from '../io_utils.js'
function main() {
    print('----- Convertendo idade em dias ----- \n')
    
    print('<<<< INSTRUÇÔES >>>>')
    print('Primeiramente, informe os anos completos;')
    print('Segundamente, informe os meses completos;')
    print('Por fim, informe os dias completos')

    const anos = Number(input('Informe os anos:'))
    const meses = Number(input('Informe os meses:'))
    const dias = Number(input('Informe os dias:'))

    const dias_total = (anos * 365) + (meses * 30) + dias

    print(`Você já deu ${dias_total} voltas em torno do eixo da Terra`)


    
}
main()