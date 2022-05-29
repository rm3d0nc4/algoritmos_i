
import { ler_numeros } from './../io_utils.js';
function main() {

    let distancia = 0
    let qtd_combustivel = 50
    let desempenho_parcial = 0
    let contador = 1
    let medir_desempenho = ler_numeros('distância percorrida até aqui e quantidade de combustível gasta')

    distancia+=medir_desempenho[0]
    qtd_combustivel-=medir_desempenho[1]


    desempenho_parcial+=medir_desempenho[0]/medir_desempenho[1]


    while(!chegar_ao_destino(distancia) && !acabar_combustivel(qtd_combustivel)) {

        medir_desempenho = ler_numeros('distância percorrida até aqui e quantidade de combustível gasta')

        while(medir_desempenho[1]> qtd_combustivel) {
            console.log('Qtd de combustível inválida.Seu tanque não tem todo esse combustível!')
            medir_desempenho = ler_numeros('distância percorrida até aqui e quantidade de combustível gasta')
        }

        distancia+=medir_desempenho[0]
        qtd_combustivel-=medir_desempenho[1]
        contador++
        desempenho_parcial+=medir_desempenho[0]/medir_desempenho[1]

    }

    const desempenho_final = desempenho_parcial/contador


    if(chegar_ao_destino(distancia)){
        console.log('Chegamos ao destino final!')
    }
    if(acabar_combustivel(qtd_combustivel)) {
        console.log('Acabou a gasosa!')
    }
    console.log(`Consumo: ${desempenho_final.toFixed(2)} km/l`)
}

const chegar_ao_destino = distancia => distancia >= 600
const acabar_combustivel = (qtd) => qtd===0

main()