import { input, ler_data } from './../io_utils.js';

// Não concluída!!!
function main() {
    const data1 = ler_data()
    const data2 = ler_data()

    const mais_recente = get_data_mais_recente(data1,data2)

    if(mais_recente != undefined) {
        const data_recente = `${mais_recente[0]}/${mais_recente[1]}/${mais_recente[2]}`
        console.log(`Mais Recente: ${data_recente}`)
    } else {
        console.log('Datas Iguais!')
    }
    



}

function get_data_mais_recente(data1, data2) {
    const [dia1, mes1, ano1] = data1
    const [dia2, mes2, ano2] = data2

    let mais_recente

    if(dia1>dia2) {
        mais_recente = data1
    } else if(dia1<dia2) {
        mais_recente =data2
    }

    if(mes1>mes2) {
        mais_recente = data1
    } else if(mes1<mes2) {
        mais_recente = data2
    }

    if (ano1>ano2) {
        mais_recente = data1
    } else if (ano1<ano2) {
        mais_recente= data2
    }
    return mais_recente
}


main()