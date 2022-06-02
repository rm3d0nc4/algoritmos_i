import {ler_numeros} from '../io_utils.js'

function main() {

    const [qtd_boiada] = ler_numeros('a quantidade de Bois')

    let id_boi_gordo 
    let peso_boi_gordo = 0

    let id_boi_magro 
    let peso_boi_magro = 0

    let contador = 1

    for(let counter = 1; counter<=qtd_boiada; counter++){
        const [id_boi, peso_boi] = ler_numeros(`a identificação e o peso do ${contador}º boi`)

        if(counter===1){

            id_boi_gordo = id_boi
            peso_boi_gordo = peso_boi
    
            id_boi_magro = id_boi
            peso_boi_magro = peso_boi

        } else {

            if (peso_boi>peso_boi_gordo){

                id_boi_gordo = id_boi
                peso_boi_gordo = peso_boi
            }

            if(peso_boi<peso_boi_magro){
                
                id_boi_magro = id_boi
                peso_boi_magro = peso_boi
            }
        }

    }

    console.log(`Identificação do boi mais gordo: ${id_boi_gordo} (${peso_boi_gordo} KG)`)
    console.log(`Identificação do boi mais magro: ${id_boi_magro} (${peso_boi_magro} KG)`)
}

main()