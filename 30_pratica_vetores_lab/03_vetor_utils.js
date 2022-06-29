import { gerar_numero_aleatorio, gerar_vetor_vazio} from "./04_utils.js"
import { eh_negativo, eh_positivo, posicao_esta_preenchida } from "./05_operacoes.js"
import fs from 'fs'



export function gerar_vetor_automaticamente(intervalo,num_elementos) {
    const  vetor = gerar_vetor_vazio(num_elementos)

    for(let i = 0; i < vetor.length; i++) {
        vetor[i] = gerar_numero_aleatorio(intervalo)
    }

    return vetor
}

export function ver_qtd_elementos(vetor) {
    return vetor.length
}


export function resetar_vetor(elemento,vetor) {
    let novo_vetor = gerar_vetor_vazio(vetor.length)

    for(let i = 0; i < novo_vetor.length; i++) {
        novo_vetor[i] = elemento
    }

    return novo_vetor
}

export function maior_elemento_e_posicao(vetor) {
    let maior_elemento = -Infinity
    let posicao_maior_elemento

    for(let i = 0; i < vetor.length; i++) {

        if(vetor[i] > maior_elemento) {
            maior_elemento = vetor[i]
            posicao_maior_elemento = i
        }
    }

    return [maior_elemento, posicao_maior_elemento]
}

export function menor_elemento_e_posicao(vetor) {
    let menor_elemento = Infinity
    let posicao_menor_elemento

    for(let i = 0; i < vetor.length; i++) {

        if(vetor[i] < menor_elemento) {
            menor_elemento = vetor[i]
            posicao_menor_elemento = i
        }
    }

    return [menor_elemento, posicao_menor_elemento]
}

export function valores_positivos_e_quantidade(vetor) {
    const valores_positivos = new Array()
    let qtd = 0

    for(let elemento of vetor) {

        if(eh_positivo(elemento)) {
            valores_positivos[qtd] = elemento
            qtd++
        }
    }

    return [valores_positivos, qtd]
}

// Opção IX

export function valores_negativos_e_quantidade(vetor) {
    const valores_negativos = new Array()
    let qtd = 0

    for(let elemento of vetor) {

        if(eh_negativo(elemento)) {
            valores_negativos[qtd] = elemento
            qtd++
        }
    }

    return [valores_negativos, qtd]
}


export function map_vetor(vetor, valor, operacao) {

    let novo_vetor = gerar_vetor_vazio(vetor.length)

    for(let i= 0; i < novo_vetor.length; i++) {
        novo_vetor[i] = operacao(vetor[i], valor)
    }

    return novo_vetor

}

export function ordenar_vetor(vetor, crescente = true) {

    let elemento_flutuante

    for (let i =0; i < vetor.length; i++){
        for(let j = 0; j < vetor.length; j++) {

            if(crescente){
                if(vetor[j] < vetor[j-1]) {
                    elemento_flutuante = vetor[j]
                    vetor[j] = vetor[j - 1]
                    vetor[j - 1] = elemento_flutuante
                }
            } else {
                if(vetor[j] > vetor[j-1]) {
                    elemento_flutuante = vetor[j]
                    vetor[j] = vetor[j - 1]
                    vetor[j - 1] = elemento_flutuante
                }
            }
        }
    }

    return vetor
}

export function embaralhar_vetor(vetor) {
    let novo_vetor = gerar_vetor_vazio(vetor.length)
    let posicoes_preenchidas = gerar_vetor_vazio(vetor.length)
    let posicao

    for(let i = 0; i < vetor.length; i++) {
        posicao = gerar_numero_aleatorio([0, vetor.length])
        
        while(posicao_esta_preenchida(posicao, posicoes_preenchidas)) {
            posicao = gerar_numero_aleatorio([0, vetor.length])
            
        }

        novo_vetor[posicao] = vetor[i]
        posicoes_preenchidas[i] = posicao
    }

    return novo_vetor
}

export function adicionar_valores(valores, vetor) {
    const novo_vetor = vetor

    for(let i = 0; i < valores.length; i++) {
        novo_vetor[novo_vetor.length] = valores[i]
    }

    return novo_vetor
}

export function remover_por_valores_exatos(valor1, vetor) {
    let novo_vetor = gerar_vetor_vazio()

    for(let valor2 of vetor) {
        if(valor1 !== valor2) {
            novo_vetor[novo_vetor.length] = valor2
        }
    }

    return novo_vetor
    
}

export function remover_por_posicao(posicao, vetor) {
    let novo_vetor = gerar_vetor_vazio()

    for(let i = 0; i < vetor.length; i++) {
        if(i !== posicao) {
            novo_vetor[novo_vetor.length] = vetor[i]
        }
    }

    return novo_vetor
}

export function editar_valor_por_posicao(valor, novo_valor, posicao, vetor) {
    const novo_vetor = gerar_vetor_vazio()

    let posicoes_elementos = -1

    for(let i = 0; i < vetor.length; i++) {

        if(vetor[i] === valor) {
            posicoes_elementos++

            if(posicoes_elementos === posicao) {
                novo_vetor[novo_vetor.length] = novo_valor
            } else {
                novo_vetor[novo_vetor.length] = vetor[i]
            }

        } else {
            novo_vetor[novo_vetor.length] = vetor[i]
            
        }
    }

    return novo_vetor

}

export function salvar_vetor(diretorio, vetor) {
    fs.writeFileSync(diretorio, String(vetor).split(',').join('\n'),  'utf-8')
}
