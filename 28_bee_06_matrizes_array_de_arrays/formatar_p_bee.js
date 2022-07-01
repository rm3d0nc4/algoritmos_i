import fs from 'fs';
const input = fs.readFileSync('1541_construindo_casas_input', 'utf8');

const lines = input.split('\n')


function main() {
    let contador = 0
    let dados = lines[contador].split(' ')
    
    let largura, comprimento, area_liberada

    while (dados.length !== 1) {    
        [largura, comprimento, area_liberada] = dados.map(Number)
        
        const area_total = ((largura * comprimento) * 100) / area_liberada

        const medida_do_lado = Math.sqrt(area_total)

        console.log(Math.trunc(medida_do_lado))

        contador++
        dados = lines[contador].split(' ')

    }
}

main()