import fs from 'fs';
const input = fs.readFileSync('ex27_input.txt', 'utf8');
const lines = input.split('\n')

function main() {

    let masculino = 0
    let feminino = 0

    let idade_m = 0
    let idade_f = 0 

    let casados = 0
    let solteiros = 0
    let divorciados = 0
    let viuvos = 0

    let homem_solteiro = 0
    let mulher_solteira = 0

    let mulheres_divorciadas_mais30 = 0

    for(let line of lines){
        const [sexo, idade, estado_civil] = line.split(' ').map(Number)

        if(eh_masculino(sexo)) {
            masculino++
            idade_m+=idade
        } else {
            feminino++
            idade_f+=idade
        }

        if(eh_casado(estado_civil)){
            casados++
        } else if(eh_solteiro(estado_civil)) {
            solteiros++
            
            if(eh_masculino(sexo)){
                homem_solteiro++
            } else {
                mulher_solteira++
            }

        } else if(eh_divorciado){
            divorciados++

            if(!eh_masculino(sexo) && idade>30){
                mulheres_divorciadas_mais30++
            }
        } else if(eh_viuvo(estado_civil)) {
            viuvos++
        }
    }

    const total_pessoas = masculino+feminino

    const med_idade_mulheres = idade_f/feminino
    const med_idade_homens = idade_m/masculino
    const per_homens_solteiros = (homem_solteiro/total_pessoas)*100
    const per_mulheres_solteiras = (mulher_solteira/total_pessoas)*100

    console.log(`Média de idade das mulheres: ${med_idade_mulheres.toFixed(2)}`)
    console.log(`Média de idade dos homens: ${med_idade_homens.toFixed(2)}`)
    console.log(`Percentual de homens solteiros: ${per_homens_solteiros.toFixed(2)}%`)
    console.log(`Percentual de mulheres solteiras: ${per_mulheres_solteiras.toFixed(2)}%`)
    console.log(`Quantidade de mulheres divorciadas acima de 30 anos: ${mulheres_divorciadas_mais30}`)


}

const eh_masculino = n => n===1

const eh_casado = n => n===1
const eh_solteiro = n => n===2
const eh_divorciado = n => n===3
const eh_viuvo = n => n===4

main()