import {ler_numero, input} from '../io_utils.js'

function main() {

    const vetor = [ 12 , -38, -11, 61, -2, 23, 70, 62, -79, 49, -64, -20, -3, 27, 69]

    let par = new Array()
    let impar = new Array()

    for(let posicao = 0; posicao< vetor.length; posicao++) {
        
        if(eh_par(vetor[posicao])) {

            if(par.length === 5) {
                
                escrever_vetor('par', par)
                par = new Array
            }

            par[par.length] = vetor[posicao]
        } else {

            if(impar.length === 5) {
                
                escrever_vetor('impar', impar)
                impar = new Array
            }

            impar[impar.length] = vetor[posicao]
        }
    }

    escrever_vetor('impar', impar)
    escrever_vetor('par', par)
}

const eh_par = n => n % 2 === 0

function escrever_vetor(titulo, vetor) {

    for (let indice = 0; indice < vetor.length; indice++) {
        console.log(`${titulo}[${indice}] = ${vetor[indice]}`)
    }
}

main()