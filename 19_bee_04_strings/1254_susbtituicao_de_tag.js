import {ler_numeros, input} from '../io_utils.js'

function main() {
    const tag = input('Tag: ')
    const nova_tag = input('Nova tag: ')

    const texto = input('Texto: ')

    let elemento
    let fatia
    let esta_dentro_da_tag = false
    let houve_alteracao = false
    let novo_texto = ''

    for(let i = 0; i < texto.length; i++) {
        elemento = texto[i]

        if(esta_abrindo_tag(elemento)) {
            novo_texto += elemento
            esta_dentro_da_tag = true
            continue
        } else if(esta_fechando_tag(elemento)) {
            novo_texto += elemento
            esta_dentro_da_tag = false
            continue
        }

        if(esta_dentro_da_tag) {
            fatia = ''

            for(let j = 0; j < tag.length && i < texto.length; j++) {
                fatia += texto[j+i]
            }

            if(eh_igual(tag, fatia)) {
                houve_alteracao = true
                novo_texto += nova_tag
                i += fatia.length -1
            } else {
                novo_texto += elemento
            }
        } else {
            novo_texto += elemento
        }
    }

    if(houve_alteracao) {
        console.log(`Novo texto: ${novo_texto}`)
    }
}


const eh_igual = (tag1, tag2) => tag1.toLowerCase() === tag2.toLowerCase()

const esta_abrindo_tag = e => e === '<'
const esta_fechando_tag = e => e === '>'

main()