import {ler_numeros, input, ler_data} from '../io_utils.js'

function main() {

    const [dia, mes, ano] = ler_data()
    const data_por_extenso = gerar_data_por_extenso(dia, mes, ano)

    console.log(data_por_extenso)
}

function gerar_data_por_extenso(dia, mes, ano){
    const meses = [
        'janeiro', 'fevereiro', 'março', 
        'abril', 'maio', 'junho', 
        'julho', 'agosto', 'setembro', 
        'outubro', 'novembro', 'dezembro'
    ]

    let data_por_extenso = `${dia} de ${meses[mes-1]} de ${ano}`

    return data_por_extenso
}

main()