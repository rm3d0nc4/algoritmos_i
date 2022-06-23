import fs from 'fs';
const input = fs.readFileSync('1262_leitura_multipla_input', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n')

function main() {
    let contador = 0

    while(!EOF(lines[contador])){

        const processos = lines[contador]
        contador++
        const qtd_leituras_simutaneas = lines[contador]

        let qtd_leitura
        let qtd_ciclos = 0
        let qtd_processos_leitura = 0
        let qtd_processos_escrita = 0

        qtd_processos_escrita = contar_elemento('W', processos)
        qtd_ciclos += qtd_processos_escrita
        
        const leituras = remover_elementos_vazios(processos.split('W'))
        
        for( let leitura of leituras) {
            if(leitura.length > qtd_leituras_simutaneas) {

                qtd_leitura = Math.ceil(leitura.length / qtd_leituras_simutaneas)
                qtd_processos_leitura += qtd_leitura

            } else {
                qtd_processos_leitura++
            }
        }

        qtd_ciclos += qtd_processos_leitura

        console.log(qtd_ciclos)
        contador++
    }
    
}

const EOF = item => item === ''

function remover_elementos_vazios(vetor) {
    let novo_vetor = new Array()

    for(let elemento of vetor) {
        if(elemento !== '') {
            novo_vetor[novo_vetor.length] = elemento
        }
    }

    return novo_vetor
}

function contar_elemento(elemento, string){
    let qtd = 0

    for(let indice = 0; indice < string.length; indice++){
        
        if(string[indice] === elemento){
            qtd++
        }
    }
    return qtd
}

main()