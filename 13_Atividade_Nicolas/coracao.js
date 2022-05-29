import prompt  from 'prompt-sync';
const input = prompt()

function main() {
    const idade = input('Digite sua idade:')
    const frequencia_cardiaca_atual = input('Digite sua frequência cardíaca atual:')

    const fc_max = 220-idade
    const intensidade = (frequencia_cardiaca_atual/fc_max)*100
    const zona = get_zona(intensidade)

    const limites_fc = get_limites_fc(fc_max)

    console.log(intensidade)
    console.log(`Zona: ${zona}`)
    console.log(limites_fc)
}

function get_zona(intensidade) {
    
    if( intensidade<50) {
        return 'Intensidade abaixo de Atividade Intensa'
    } else if(intensidade<60) {
        return 'Atividade moderada'
    } else if(intensidade<70) {
        return 'Controle de peso'
    } else if(intensidade<80) {
        return 'Aeróbica'
    } else if(intensidade<90) {
        return 'Anaeróbica'
    } else if(intensidade<=100) {
        return 'Esforço Máximo'
    } else {
        return 'Intensidade acima do Esforço Máximo'
    }
}

function get_limites_fc(fc_max){
    const esforco_maximo = fc_max*1
    const anaerobica = fc_max*.89
    const aerobica = fc_max*.79
    const controle_de_peso = fc_max*.69
    const atividade_moderada = fc_max*.59
    
    let resultado = '\n========Limites========'
    resultado+=`\nAtividade moderada: ${atividade_moderada}`
    resultado+=`\nControle de peso: ${controle_de_peso}`
    resultado+=`\nAeróbica: ${aerobica}`
    resultado+=`\nAnaeróbica: ${anaerobica}`
    resultado+=`\nEsforço Máximo: ${esforco_maximo}`

    return resultado
}




main()