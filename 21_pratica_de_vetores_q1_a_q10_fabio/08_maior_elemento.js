import {ler_numero, input} from '../io_utils.js'

function main() {

    //Lendo valor de N
    const num_elementos = ler_numero('Número de elementos')

    // Criando vetor
    const vetorA = new Array(num_elementos)

    // Preenchendo vetor A
    for(let posicao = 0; posicao<num_elementos; posicao++) {
        vetorA[posicao] = ler_numero(`A[${posicao}]`)
    }

    // Verificando valores
    const [maior_valor, posicao_maior_valor] = get_maior_valor_e_posicao(vetorA)
    const [menor_valor, posicao_menor_valor] = get_menor_valor_e_posicao(vetorA)

    // Imprimindo resultados
    console.log(`Maior valor: ${maior_valor}`)
    console.log(`Posição: ${posicao_maior_valor}`)
    console.log('===========================')
    console.log(`Menor valor: ${menor_valor}`)
    console.log(`Posição: ${posicao_menor_valor}`)

    

}

function get_maior_valor_e_posicao(vetor) {
    let maior_valor = 0
    let posicao_maior_valor
    let menor_valor = 0
    let posicao_menor_valor
    
    for(let posicao in vetor){
        // console.log(typeof(posicao))
        if(posicao === '0') {

            maior_valor = vetor[posicao]
            posicao_maior_valor = posicao
        } else {

            if(vetor[posicao] > maior_valor){
                maior_valor = vetor[posicao]
                posicao_maior_valor = posicao
            }
        }
    }

    return [maior_valor, posicao_maior_valor]
}

function get_menor_valor_e_posicao(vetor) {
    let menor_valor = 0
    let posicao_menor_valor
    
    for(let posicao in vetor){
        // console.log(typeof(posicao))
        if(posicao === '0') {

            menor_valor = vetor[posicao]
            posicao_menor_valor = posicao
        } else {
            if(vetor[posicao] < menor_valor) {
                menor_valor = vetor[posicao]
                posicao_menor_valor = posicao
            }
        }
    }

    return [menor_valor, posicao_menor_valor]
}

main()