import { input, ler_numero } from "../io_utils.js";
import { contar_elemento } from "../string_utils.js";

function main() {
    const processos = input('Processos: ')
    const qtd_leituras_simutaneas = ler_numero('Leituras Simultâneas')

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
}

function remover_elementos_vazios(vetor) {
    let novo_vetor = new Array()

    for(let elemento of vetor) {
        if(elemento !== '') {
            novo_vetor[novo_vetor.length] = elemento
        }
    }

    return novo_vetor
}

main()