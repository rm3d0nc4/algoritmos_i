import { ordenar_vetor } from '../../array_utils.js'
import {ler_numero, input} from '../../io_utils.js'


// nÃO CONLUÍDO

function main() {

    const vetor = [12, 46, 32, 64]
    const ordem = ordenar_vetor(vetor)
    
    const media = ordem.reduce((mean, valor1, vetor) => {

        mean+= valor1/vetor.length

        
        return mean
    }, 0)

    const mediana = get_mediana_vetor(vetor)

    console.log(`Média: ${media}`)
    console.log(`Mediana: ${mediana}`)
    
}

function get_mediana_vetor(vetor) {
    let posicao
    let valor
    
    if(vetor.length % 2 === 0) {
        
        posicao = vetor.length / 2
        valor = (vetor[posicao] + vetor[posicao+1])/2
    } else {

        posicao = Math.floor(vetor.length / 2) + 1
        valor = vetor[posicao]
    }
}




main()