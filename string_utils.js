// Função para verificar se um determinado elemento
// Está contido numa lista de elementos
export function contem(lista_elementos, elemento){
    
    for(let elemento_item of lista_elementos) {
        if (elemento === elemento_item){
            return true
        }
    }
    return false
}

// função para contar ocorrencias de um elemento numa lista
export function contar_elemento(elemento, string){
    let qtd = 0

    for(let indice = 0; indice < string.length; indice++){
        
        if(string[indice] === elemento){
            qtd++
        }
    }
    return qtd
}

// Funcao para inverter uma string
export function inverter_string(str){
    let string_invertida = ''

    for(let index = str.length-1; index>=0; index--){
        string_invertida+=str[index]
    }

    return string_invertida
}

// Busca posição de um letra no alfabeto (MAIUSCULO)
export function buscar_posicao_no_alfabeto(letra){
    const char_code_letra = letra.toUpperCase().charCodeAt(0)
    const posicao = char_code_letra - 65

    return posicao
}

export function extrair_letras_utilizadas(texto) {
    let letras = ''

    for(let letra = 0; letra < texto.length; letra++) {
        if(!contem(letras, texto[letra])){
            letras += texto[letra]
        }
    }
    return letras
}

export function ordenar_letras_crescente(texto) {
    let ordem = ''
    let posicao_menor_elemento

    for(let elemento of texto){

        posicao_menor_elemento = get_posicao_menor_elemento(texto)
        ordem+=texto[posicao_menor_elemento]

        texto = remover_elemento(posicao_menor_elemento, texto)
    }

    return ordem
}

export function get_posicao_menor_elemento(texto) {
    let posicao_menor_elemento = 0

    for(let posicao = 0; posicao < texto.length; posicao++) {
        if(texto[posicao] < texto[posicao_menor_elemento]) {
            posicao_menor_elemento = posicao
        }
    }

    return posicao_menor_elemento
}


export function remover_elemento(posicao_elemento,texto) {
    let novo_texto = ''

    for(let posicao = 0; posicao < texto.length; posicao++) {

        if(posicao !== posicao_elemento) {
            novo_texto+= texto[posicao]
        }
    }
    return novo_texto
}

export function converter_para_decimal(bin) {
    let expoente = bin.length-1
    let decimal = 0
    let valor_posicao_atual

    for(let num = 0; num<bin.length; num++){
        valor_posicao_atual = Number(bin[num])*2**expoente
        decimal+=valor_posicao_atual
        expoente--
    }

    return decimal

}

export function alinhar_texto_a_direita(texto, qtd_espaco){
    let espacos = ''
    let texto_alinhado

    for (let index = 0; index < qtd_espaco; index++) {
        espacos+=' '
    }
    texto_alinhado = espacos+texto

    return texto_alinhado

}