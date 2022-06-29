import { menu } from "./menu.js"

import { 
    continuar, ler_numero, 
    limpar, print 
} from "./04_utils.js"

import { 
    opcao_adicionar_valores, opcao_atualizar_campos, opcao_editar_valor_por_posicao, 
    opcao_mostrar_valores_negativos_e_quantidade, opcao_mostrar_valores_positivos_e_quantidade, 
    opcao_remover_por_posicao, opcao_remover_por_valores_exatos, opcao_resetar_vetor, opcao_sair, 
    opcao_salvar_em_arquivo, opcao_ver_maior_elemento_e_posicao, opcao_ver_media_dos_valores, opcao_ver_menor_elemento_e_posicao, 
    opcao_ver_qtd_elementos, opcao_ver_somatorio_dos_valores, pedir_vetor,
} from "./02_vetor_funcionalidades.js"

import { 
    adicionar_valores, editar_valor_por_posicao, 
    remover_por_posicao, remover_por_valores_exatos 
} from "./03_vetor_utils.js"

const my_menu = menu()


function main() {
    let opcao = -1
    let saida = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

    while( true){

        print(my_menu)    
        opcao = ler_numero('Digite uma opção: ')

        if( opcao === 1) {
            limpar()
            
            saida = pedir_vetor()
            continuar()
        } else if( opcao === 2) {
            limpar()

            print(saida)
            continuar()

        } else if(opcao === 3) {
            limpar()

            saida = opcao_resetar_vetor(saida)
            continuar()
        } else if(opcao === 4) {
            limpar()

            opcao_ver_qtd_elementos(saida)
            continuar()
        } else if(opcao === 5) {
            limpar()

            opcao_ver_maior_elemento_e_posicao(saida)
            opcao_ver_menor_elemento_e_posicao(saida)

            continuar()
        } else if( opcao === 6) {
            limpar()

            opcao_ver_media_dos_valores(saida)

            continuar()
        } else if( opcao === 7) {
            limpar()

            opcao_ver_somatorio_dos_valores(saida)
            continuar()
        } else if( opcao === 8) {
            limpar()

            opcao_mostrar_valores_positivos_e_quantidade(saida)
            continuar()
        } else if( opcao === 9) {
            limpar()

            opcao_mostrar_valores_negativos_e_quantidade(saida)
            continuar()
        } else if( opcao === 10) {
            limpar()

            saida = opcao_atualizar_campos(saida)
            continuar()
        } else if (opcao === 11) {
            limpar()

            saida = opcao_adicionar_valores(saida)
            continuar()
        } else if (opcao === 12) {
            limpar()

            saida = opcao_remover_por_valores_exatos(saida)
            continuar()
        } else if (opcao === 13) {
            limpar()

            saida = opcao_remover_por_posicao(saida)
            continuar()
        } else if (opcao === 14) {
            limpar()

            saida = opcao_editar_valor_por_posicao(saida)
            continuar()
        } else if (opcao === 15) {
            limpar()

            opcao_salvar_em_arquivo(saida)
            continuar()
        } else if (opcao === 16) {
            limpar()

            opcao_sair(saida)
            continuar()
            break
        } else {
            limpar()
            
            print('Opção inválida! Por favor de uma opção válida:')
            continuar()
            limpar()
        }
        
        limpar()
    }
}



main()