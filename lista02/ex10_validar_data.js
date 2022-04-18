import { input, ler_data } from './../io_utils.js';

function main() {
    const input10 = ler_data()
    const validacao = validar_data(input10)
    console.log(`Essa data é: ${validacao}`)
}

// Questão 10
function validar_data(data){
    if (data[0]<=28 && data[1]===2 && data[2]%4!=0){
        return 'Válida'

    } else if(data[0]<=29 && data[1]===2 && data[2]%4===0) {
        return 'Válida'
        
    } else if(data[0]<=30 && data[1]=== 4 || data[1]===6 || data[1]===7 || data[1]===9 || data[1]===11){
        return 'Válida'
        
    } else if(data[0]<=31 && data[1]=== 1 || data[1]===3 || data[1]===5 || data[1]===8 || data[1]===10 || data[1]===12){
        return 'Válida'

    } else {
        return 'Inválida'
    }
}


main()