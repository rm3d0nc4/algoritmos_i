
import { ler_numeros } from './../io_utils.js';

function main() {
    let pontuacao_jogador1 = 0
    let pontuacao_jogador2 = 0
    let contador_partida = 1

    let [partida] = ler_numeros(`qual jogador ganhou a partida ${contador_partida} (1 ou 2)`)

    if(partida===1) {
        pontuacao_jogador1++
    } else {
        pontuacao_jogador2++
    }

    while(!alguem_ganhar(pontuacao_jogador1, pontuacao_jogador2)) {
        contador_partida++

        [partida] = ler_numeros(`qual jogador ganhou a partida ${contador_partida} (1 ou 2)`)

        if(partida===1) {
            pontuacao_jogador1++
        } else {
            pontuacao_jogador2++
        }

    }

    console.log(`Pontuação do jogador 1: ${pontuacao_jogador1}}`)
    console.log(`Pontuação do jogador 2: ${pontuacao_jogador2}}`)

    if( pontuacao_jogador1>pontuacao_jogador2) {
        console.log('Jogador 1 venceu!')
    } else {
        console.log('Jogador 2 venceu!')
    }
}

function alguem_ganhar(pontuacao1, pontuacao2) {
    
    if(pontuacao1>21 || pontuacao2>21){
        if( pontuacao1-pontuacao2===2 || pontuacao2-pontuacao1===2){
            return true
        }
    }else if(pontuacao1===21 || pontuacao2 ===21){
        if((pontuacao1-pontuacao2>=2) || (pontuacao2-pontuacao1>=2)){
            return true
        }
    } 

    return false

}

main()