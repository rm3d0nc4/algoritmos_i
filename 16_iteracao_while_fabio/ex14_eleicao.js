
import { ler_numeros } from './../io_utils.js';

function main() {

    let serra = 0
    let dilma = 0
    let ciro = 0
    let indeciso = 0
    let outros = 0
    let nulo_branco = 0

    let opiniao

    while (opiniao !=-1) {

        console.log('Possíveis opiniões de voto:\n      Serra - 45\n      Dilma - 13\n      Ciro Gomes - 23\n      Indeciso - 99\n      Outro=98\n      nulo/branco - 0\n')
        opiniao = ler_numeros('sua opinião')[0]
        console.clear()

        if(opiniao===13) {
            dilma++
        } else if(opiniao ===23){
            serra++
        } else if(opiniao ===45){
            ciro++
        } else if(opiniao ===98){
            outros++
        } else if(opiniao ===99){
            indeciso++
        } else if(opiniao ===0){
            nulo_branco++
        }
    }

    const total_opinioes = serra+dilma+ciro+indeciso+outros+nulo_branco

    const perc_serra = (serra/total_opinioes) * 100
    const perc_dilma = (dilma/total_opinioes) * 100
    const perc_ciro = (ciro/total_opinioes) * 100
    const perc_indecisos = (indeciso/total_opinioes) * 100
    const perc_outros = (outros/total_opinioes) * 100
    const perc_branco_nulo = (nulo_branco/total_opinioes) * 100
    const possibilidade_s_turno = (perc_menor_que_50(perc_serra) && perc_menor_que_50(perc_dilma) && perc_menor_que_50(perc_ciro))

    console.log(`Percentual de intenções de voto para Serra: ${perc_serra.toFixed(2)}`)
    console.log(`Percentual de intenções de voto para Dilma: ${perc_dilma.toFixed(2)}`)
    console.log(`Percentual de intenções de voto para Ciro: ${perc_ciro.toFixed(2)}`)
    console.log(`Percentual de intenções de voto indeciso: ${perc_indecisos.toFixed(2)}`)
    console.log(`Percentual de intenções de voto para  outros: ${perc_outros.toFixed(2)}`)
    console.log(`Percentual de intenções de voto branco/nulo: ${perc_branco_nulo.toFixed(2)}`)
    console.log(`Total entrevistados: ${total_opinioes}`)

    if(possibilidade_s_turno){
        console.log(`Há possibilidade de 2º turno!`)
    } else {
        console.log(`Não há possibilidade de 2º turno`)
    }
}



const perc_menor_que_50 = (perc) => perc<51

main()