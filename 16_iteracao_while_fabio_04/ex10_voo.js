import {ler_numeros, input} from '../io_utils.js'

        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 
        // FIZ UMA GAMBIARRA 

function main() {

    let peso_total_contatineres = 0
    let peso_total_bagagens = 0
    let peso_total_passageiros = 0
    let total_passageiros = 0

    const [n_contaieres] = ler_numeros('o número de containeres')

    for (let container= 1 ; container<=n_contaieres; container++) {
        const [peso_do_container] = ler_numeros(`o peso (em kg) do container ${container}`)
        peso_total_contatineres+=peso_do_container
    }

     let n_bilhete = 1 
     let qtd_bagagem = 0

     while(n_bilhete!=0) {
        [n_bilhete, qtd_bagagem] = ler_numeros('o nº do seu bilhete e o nº de bagagens')
        total_passageiros++
        peso_total_passageiros+=70
        peso_total_bagagens+=(qtd_bagagem*10)
        console.log(total_passageiros)

    }

    console.log(`Quantidade de passageiros: ${total_passageiros-1}`)
    console.log(`Volume total de bagagens: ${peso_total_bagagens} KG`)
    console.log(`Peso total dos passageiros: ${peso_total_passageiros-70}`)
    console.log(`Volume total de carga: ${peso_total_contatineres} Kg`)
    
    const peso_voo_s_combustivel = peso_total_bagagens+peso_total_contatineres+(peso_total_passageiros-70)

    console.log(`Peso do voo (sem combustível): ${peso_voo_s_combustivel}`)
    
    const kg_combustivel_possivel = 500000-peso_voo_s_combustivel
    const l_combustivel_possivel = (kg_combustivel_possivel/1.5)
    // console.log(`O avião pode levar até ${kg_combustivel_possivel.toFixed(2)} quilos de combustível`)
    console.log(`O avião pode levar até ${l_combustivel_possivel.toFixed(2)} litros de combustível`)

    if(l_combustivel_possivel<10000) {
        console.log("DECOLAGEM NÂO AUTORIZADA")
    } else {
        console.log("DECOLAGEM AUTORIZADA")
    }

}


main()