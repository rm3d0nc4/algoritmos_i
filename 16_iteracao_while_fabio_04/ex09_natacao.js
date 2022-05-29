import { input, ler_numeros } from "../io_utils.js";

function main() {

    let pontuaca_equipe_a = 0
    let pontuaca_equipe_b = 0
    
    let[n_prova] = ler_numeros('o número da prova')
    let [n_nadadores] = ler_numeros('o número de nadadores')

    while(!(n_prova===0 || n_nadadores===0)) {
        
        for(let n_nadador = 1; n_nadador<=n_nadadores; n_nadador++) {
            const [nome, classificacao, tempo, clube] = ler_dados_nadador(n_nadador)
            const pontuacao = get_pontuacao(classificacao)
            
            if( clube==='a') {
                pontuaca_equipe_a+=pontuacao
            } else {
                pontuaca_equipe_b+=pontuacao
            }
        }

        [n_prova] = ler_numeros('o número da prova')
        [n_nadadores] = ler_numeros('o número de nadadores')
    }
    
    console.log(`Pontuação equipe A: ${pontuaca_equipe_a}`)
    console.log(`Pontuação equipe B: ${pontuaca_equipe_b}`)
    
    if(pontuaca_equipe_a>pontuaca_equipe_b) {
        console.log('Equipe A venceu!')
    } else if( pontuaca_equipe_a<pontuaca_equipe_b) {
        console.log('Equipe B venceu!')
    } else{
        console.log('Empate!')
    }

}

function ler_dados_nadador(n_nadador) {
    console.log(`Nadador ${n_nadador}, digite seu nome, classificação, tempo(em segundos) e clube (a ou b)`)
    const dados = input('>').split(' ')

    const nome = dados[0]
    const classificacao = Number(dados[1])
    const tempo = Number(dados[2])
    const clube = dados[3].toLowerCase()

    const dados_retorno = [nome,classificacao,tempo,clube]

    return dados_retorno

}

function get_pontuacao(classificacao) {
    if(classificacao===1) {
        return 9
    } else if(classificacao===2){
        return 6
    } else if(classificacao===3) {
        return 4
    } else if(classificacao===4) {
        return 3
    }

}

main()