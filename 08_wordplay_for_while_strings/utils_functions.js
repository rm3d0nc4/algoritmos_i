import prompt from 'prompt-sync'

const input = prompt()

export function show_menu() {
    let menu = '\n'
    menu+= '=================== MENU ==================='
    menu+='\n'
    menu+= '\n1 - Palavras com mais de N caracteres'
    menu+= '\n2 - Palavras sem uma determinada letra'
    menu+= '\n3 - Palavras sem as letras proibidas'
    menu+= '\n4 - Palavras apenas com as letras selecionadas'
    menu+= '\n5 - Palavras com letras obrigatórias'
    menu+= '\n6 - Palavras com ordem alfabética na composição'
    menu+= '\n7 - Ler outro banco de palavras'
    menu+='\n\n0 - finalizar programa'
    menu+='\n'

    console.log(menu)
}

export function to_continue() {
    input('pressione <Enter> para continuar...')
    console.clear()
}

export function get_number_of_range(msg, min, max) {
    let select_option = Number(input(msg))

    while(!(select_option >=min && select_option<=max) ) {

        console.log('Digite um número válido!')
        select_option = Number(input(msg))
    }

    return select_option

}

export function get_number(msg) {
    console.log(msg)
    let value = input('>')

    while (isNaN(value)) {
        console.log('Digite um valor correto!')
        console.log(msg)
        value = input('>')
    }
    return value
}

export function get_text(msg) {
    console.log(msg)
    let value = input('>')

    while (value.length === 0) {
        console.log('Texto vazio... Favor digitar algo!')
        console.log(msg)
        value = input('>')
    }
    return value
}

