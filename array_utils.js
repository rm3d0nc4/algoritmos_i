export function get_maior_valor_e_posicao(vetor) {
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

    return [maior_valor, Number(posicao_maior_valor)]
}
export function get_menor_valor_e_posicao(vetor) {
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

    return [menor_valor, Number(posicao_menor_valor)]
}