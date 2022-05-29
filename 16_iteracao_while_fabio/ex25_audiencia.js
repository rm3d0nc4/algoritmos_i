import { ler_numeros } from "../io_utils.js"

function main() {
    const canais = [2, 4, 5, 7, 10]
    let aud_canal2 = 0
    let aud_canal4 = 0
    let aud_canal5 = 0
    let aud_canal7 = 0
    let aud_canal10 = 0

    let n_canal
    let n_pessoas_assistindo

    while (true) {
        [n_canal, n_pessoas_assistindo ] = ler_numeros('o número do canal e quantas pessoas estão assistindo a ele')
        
        if(n_canal===0) {
            break
        }
        
        if(esta_contido_em(n_canal, canais)) {
            if(n_canal===2) {
                aud_canal2+=n_pessoas_assistindo
            } else if(n_canal===4) {
                aud_canal4+=n_pessoas_assistindo
            } else if(n_canal===5) {
                aud_canal5+=n_pessoas_assistindo
            } else if(n_canal===7) {
                aud_canal7+=n_pessoas_assistindo
            } else {
                aud_canal10+=n_pessoas_assistindo
            }
        } else {
            console.log('Por favor digite um nº de canal válido (2, 4, 5, 7 ou 10)')
        }
    }

    const audiencia_total = aud_canal2+aud_canal4+aud_canal5+aud_canal7+aud_canal10

    const per_aud_canal2 = (aud_canal2/audiencia_total)*100
    const per_aud_canal4 = (aud_canal4/audiencia_total)*100
    const per_aud_canal5 = (aud_canal5/audiencia_total)*100
    const per_aud_canal7 = (aud_canal7/audiencia_total)*100
    const per_aud_canal10 = (aud_canal10/audiencia_total)*100

    console.log(`Audiência do canal 2: ${per_aud_canal2.toFixed(2)} (${aud_canal2} telespectadores)`)
    console.log(`Audiência do canal 4: ${per_aud_canal4.toFixed(2)} (${aud_canal4} telespectadores)`)
    console.log(`Audiência do canal 5: ${per_aud_canal5.toFixed(2)} (${aud_canal5} telespectadores)`)
    console.log(`Audiência do canal 7: ${per_aud_canal7.toFixed(2)} (${aud_canal7} telespectadores)`)
    console.log(`Audiência do canal 10: ${per_aud_canal10.toFixed(2)} (${aud_canal10} telespectadores)`)
    console.log(`Total de telespectadores: ${audiencia_total}`)
}

function esta_contido_em(numero, lista){
    for(let elemento of lista) {
        if (numero===elemento){
            return true
        }
    }
    return false
}

main()