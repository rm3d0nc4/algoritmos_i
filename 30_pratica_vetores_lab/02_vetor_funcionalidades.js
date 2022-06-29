import fs from 'fs'

import { 
    adicionar_valores, editar_valor_por_posicao, embaralhar_vetor, gerar_vetor_automaticamente, maior_elemento_e_posicao, 
    map_vetor, menor_elemento_e_posicao, ordenar_vetor, remover_por_posicao, remover_por_valores_exatos, resetar_vetor, 
    salvar_vetor, valores_negativos_e_quantidade, valores_positivos_e_quantidade, ver_qtd_elementos 
} from "./03_vetor_utils.js"

import { 
    gerar_vetor_vazio, input, ler_fracao, ler_intervalo, ler_lista_numeros, 
    ler_numero, ler_numero_intervalo, print 
} from "./04_utils.js"

import { elevar, media_elementos, multiplicar, reduzir_a_fracao, somar_todos_elementos, substituir_negativos } from "./05_operacoes.js"


// Opção I

export function pedir_vetor() {
    let vetor
    let num_elementos
    
    let opcoes_entrada = '========== FORMA DE ENTRADA =========='
    opcoes_entrada += '\n  1) Gerar vetor automaticamente'
    opcoes_entrada += '\n  2) Gerar vetor manualmente'
    opcoes_entrada += '\n  3) Carregar arquivo'
    opcoes_entrada += '\n'

    print(opcoes_entrada) 

    let opcao =ler_numero('Opção: ')


    if(opcao === 1) {

        num_elementos = ler_numero('Numero de elementos: ')
        vetor = opcao_gerar_vetor_automaticamente(num_elementos)
    } else if( opcao === 2) {
        
        num_elementos = ler_numero('Numero de elementos: ')
        vetor = pedir_elementos_vetor(num_elementos)
    } else {
        
        vetor = carregar_vetor_de_arquivo()
        
    }

    return vetor
}


function opcao_gerar_vetor_automaticamente(num_elementos) {
    const intervalo = ler_intervalo('Digite o intervalo (min max): ')

    const  vetor = gerar_vetor_automaticamente(intervalo, num_elementos)

    return vetor
}





function pedir_elementos_vetor(num_elementos) {
    const intervalo = ler_intervalo('Digite o intervalo (min max): ')

    const  vetor = gerar_vetor_vazio(num_elementos)

    for(let i = 0; i < vetor.length; i++) {
        vetor[i] = ler_numero_intervalo(`Valor ${i+1}: `, intervalo)
    }

    return vetor
}

function carregar_vetor_de_arquivo() {
    const caminho = input('Caminho: ')
    const dados = fs.readFileSync(caminho, 'utf-8')
    print(dados)
    const vetor = dados.split('\n').map(Number)

    return vetor
}

// Opção III

export function opcao_resetar_vetor(vetor) {
    let novo_vetor = gerar_vetor_vazio(vetor.length)    
    const elemento = ler_numero('Valor padrão: ')

    novo_vetor = resetar_vetor(elemento, vetor)

    return novo_vetor
}

// Opção IV


export function opcao_ver_qtd_elementos(vetor) {
    const qtd_elementos = ver_qtd_elementos(vetor)

    print(`Quantidade de elementos: ${qtd_elementos}`)
}

// Opção V


export function opcao_ver_maior_elemento_e_posicao(vetor) {
    let [maior_elemento, posicao_maior_elemento] = maior_elemento_e_posicao(vetor)

    print(`Maior elemento: ${maior_elemento} \n Posição: ${posicao_maior_elemento}`)
}


export function opcao_ver_menor_elemento_e_posicao(vetor) {
    let [menor_elemento, posicao_menor_elemento] = menor_elemento_e_posicao(vetor)

    print(`Menor elemento: ${menor_elemento} \n Posição: ${posicao_menor_elemento}`)
}

// Opção VI

export function opcao_ver_media_dos_valores(vetor) {
    const media = media_elementos(vetor)

    print(`Média dos valores: ${media.toFixed(2)}`)
}

// Opção VII

export function opcao_ver_somatorio_dos_valores(vetor) {
    const media = somar_todos_elementos(vetor)

    print(`Média dos valores: ${media.toFixed(2)}`)
}

// Opção VIII

export function opcao_mostrar_valores_positivos_e_quantidade(vetor) {

    let [valores_positivos, qtd] = valores_positivos_e_quantidade(vetor)

    print(`Valores positivos: ${valores_positivos} (${qtd} elemetos)`)
}

// Opção IX

export function opcao_mostrar_valores_negativos_e_quantidade(vetor) {

    let [valores_negativos, qtd] = valores_negativos_e_quantidade(vetor)

    print(`Valores negativos: ${valores_negativos} (${qtd} elemetos)`)
}

// Opção X
export function opcao_atualizar_campos(vetor) {
    let novo_vetor
    let valor
    let intervalo
    let a,b
    
    let opcoes_atualizacao = '========== ATUALIZAÇÕES =========='
    opcoes_atualizacao += '\n  1) Multiplicar por um valor'
    opcoes_atualizacao += '\n  2) Elevar a um valor'
    opcoes_atualizacao += '\n  3) Reduzir a uma fração'
    opcoes_atualizacao += '\n  4) Substituir valores negativos por um número aleatórios'
    opcoes_atualizacao += '\n  5) Ordenar valores'
    opcoes_atualizacao += '\n  6) Embaralhar valores'
    opcoes_atualizacao += '\n'

    print(opcoes_atualizacao) 

    const opcao = ler_numero('Opção: ')


    if(opcao === 1) {
        valor = ler_numero('Multiplicar por: ')

        novo_vetor = map_vetor(vetor, valor, multiplicar)

    } else if( opcao === 2) {
        valor =ler_numero('Elevar a: ')
        
        novo_vetor = map_vetor(vetor, valor, elevar)
    } else if( opcao === 3) {
        [a, b] = ler_fracao('Fração (a/b): ')
        
        novo_vetor = map_vetor(vetor, a/b, reduzir_a_fracao)
    } else if( opcao === 4) {
        intervalo = ler_lista_numeros('Digite o intervalo (min max): ')
        
        novo_vetor = map_vetor(vetor, intervalo, substituir_negativos)
    } else if(opcao === 5) {
        
        novo_vetor = opcao_ordenar_vetor(vetor)
    } else {
        novo_vetor = embaralhar_vetor(vetor)
    }

    return novo_vetor
}

// Opção XI


function opcao_ordenar_vetor(vetor) {
    let opcao 
    let novo_vetor
    let opcoes_ordenacao =  '======= OPÇÕES DE ORDENAÇÃO ======='
        opcoes_ordenacao +=  '\n  1) Crescente'
        opcoes_ordenacao +=  '\n  2) Decrescente'
        opcoes_ordenacao +=  '\n'
    
    print(opcoes_ordenacao)

    opcao =ler_numero('Opção: ')

    if(opcao === 1) {
        novo_vetor = ordenar_vetor(vetor)
    } else {
        novo_vetor = ordenar_vetor(vetor, false)
    }

    return novo_vetor
}

export function opcao_adicionar_valores(vetor) {
    const valores = input('Valores: ').split(' ').map(Number)
    
    const novo_vetor = adicionar_valores(valores, vetor)

    return novo_vetor
}

export function opcao_remover_por_valores_exatos(vetor) {
    let valor1 = Number(input('Valor: '))
    let novo_vetor = remover_por_valores_exatos(valor1, vetor)

    print(`Valor removido: ${valor1}`)
    print(novo_vetor)

    return novo_vetor
    
}

export function opcao_remover_por_posicao(vetor) {
    const posicao = Number(input('Posição: ')) -1
    let novo_vetor = remover_por_posicao(posicao, vetor)

    print(`Valor removido: ${vetor[posicao]}`)
    print(novo_vetor)

    return novo_vetor
}

export function opcao_editar_valor_por_posicao(vetor) {
    const valor = Number(input('Valor: '))
    const novo_valor = Number(input('Novo valor: '))
    const posicao = Number(input(`${valor} na posição: `)) -1

    const novo_vetor = editar_valor_por_posicao(valor, novo_valor, posicao, vetor)


    print(`Valor removido: ${valor}[${posicao + 1}]`)
    print(novo_vetor)

    return novo_vetor

}

export function opcao_salvar_em_arquivo(vetor) {
    const diretorio_arquivos = './salvos/' + input('Nome do arquivo: ') + '.txt'
    
    salvar_vetor(diretorio_arquivos, vetor)

    print(`Vetor salvo em: ${diretorio_arquivos}`)
}

export function opcao_sair(vetor) {
    print('Saindo...')
    
    const diretorio_arquivos = './salvos/output.txt'

    salvar_vetor(diretorio_arquivos, vetor)

    print(`Vetor salvo em: ${diretorio_arquivos}`)

}

