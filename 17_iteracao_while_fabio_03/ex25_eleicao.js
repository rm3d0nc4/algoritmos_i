import {ler_numeros} from '../io_utils.js'

function main() {

    let [n_eleitores] = ler_numeros('o número de eleitores')

    let contador = 1

    let votos_candidato1 = 0
    let votos_candidato2 = 0
    let votos_candidato3 = 0
    let branco = 0
    let nulo = 0

    while(contador<=n_eleitores){

        const [votacao] = ler_numeros('a sua escolha (1 - Candidato 1, 2 - Candidato 2, 3 - Candidato 3, 9 - Nulo, 0 - Branco)')
        
        if(votacao===1){
            votos_candidato1++
        } else if(votacao===2){
            votos_candidato2++
        } else if(votacao===3){
            votos_candidato3++
        } else if(votacao===9){
            nulo++
        } else{
            branco++
        }

        contador++
    }

    console.log('RESULTADO DA ELEIÇÃO')
    console.log(`Quantidade de votos p/ o candidato 1: ${votos_candidato1}`)
    console.log(`Quantidade de votos p/ o candidato 2: ${votos_candidato2}`)
    console.log(`Quantidade de votos p/ o candidato 3: ${votos_candidato3}`)
    console.log(`Quantidade de votos brancos: ${branco}`)
    console.log(`Quantidade de votos nulos: ${nulo}`)

    if(votos_candidato1 > votos_candidato2 && votos_candidato1>votos_candidato3){
        console.log('Candidato 1 venceu')
    } else {
        if(votos_candidato2>votos_candidato3){
            console.log('Candidato 2 venceu')
        } else if(votos_candidato3>votos_candidato2){
            console.log('Candidato 3 venceu')
        } else{
            console.log('Houve empate')
        }
    }

}

main()