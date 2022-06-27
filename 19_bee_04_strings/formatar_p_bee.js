import fs from 'fs';
// import { alinhar_texto_a_direita } from '../string_utils.js';
// import { ler_numero, input } from '../io_utils.js';
const input = fs.readFileSync('1278_justificador2_input', 'utf8');
var lines = input.split('\n');

function main() {   

    let contador = 0, contador_saidas = 0
    let qtd_linhas, linha, linha_formatada, linhas_formatadas
    let textos, texto_alinhado, tam_maior_texto
    let qtd_espacos, saida
    
    while( true ) {
        qtd_linhas = Number(lines[contador])
        
        if(qtd_linhas === 0) {
            break
        }

        tam_maior_texto = 0
        linhas_formatadas = ''
        saida = ''
        contador++

        for(let i = contador; i < contador + qtd_linhas; i++){
            linha = lines[i].split(' ')
            linha_formatada = formatar(linha)
    
            if(eh_maior(linha_formatada.length, tam_maior_texto)) {
                tam_maior_texto = linha_formatada.length
            }
    
            i === contador ? linhas_formatadas += `${linha_formatada}`
            : linhas_formatadas += `*${linha_formatada}`
            
        }
        
        textos = linhas_formatadas.split('*')
        
        for (let i = 0; i < textos.length; i++) {
            qtd_espacos = tam_maior_texto - textos[i].length
        
            texto_alinhado = alinhar_texto_a_direita(textos[i], qtd_espacos)
                
            i === 0 ? saida += texto_alinhado
            : saida += `*${texto_alinhado}` 
        }

        saida = saida.split('*').join('\n')

        if(contador_saidas !== 0) {
            console.log('')
            console.log(saida)
        } else {
            console.log(saida)
        }

        contador_saidas++
        contador += qtd_linhas
    }
    return qtd
}

function alinhar_texto_a_direita(texto, qtd_espaco){
    let espacos = ''
    let texto_alinhado

    for (let index = 0; index < qtd_espaco; index++) {
        espacos+=' '
    }
    texto_alinhado = espacos+texto

    return texto_alinhado

}

function formatar(elementos){
    let string_formatada = ''

    for( let elemento of elementos) {
        if(elemento !== '') {
            string_formatada === '' ? string_formatada += elemento
            : string_formatada += ` ${elemento}`
            
        }
    }
    return string_formatada
}

const eh_maior = (n1, n2) => n1>n2


main()