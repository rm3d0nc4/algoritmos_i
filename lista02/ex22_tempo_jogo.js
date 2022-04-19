import { input } from './../io_utils.js';

function main() {
    const inicio = input(`Digite a hora em que o jogo iniciou (hh:mm):`).split(':').map(Number) 
    const fim = input(`Digite a hora em que o jogo terminou (hh:mm):`).split(':').map(Number) 

    const result = calcula_tempo_jogo(inicio, fim)

    console.log(result)
                // tempo = Math.abs(fim - inicio)
                // tempo = 24:00  11:00 - 12:05  
}

function calcula_tempo_jogo(inicio, fim) {
    let [hora_inicio, minuto_inicio] = inicio
    let [hora_fim, minuto_fim] = fim
    
    let horas_de_duracao
    let minutos_de_duracao

    if(hora_fim>hora_inicio) { // Significa que o jogo terminou no mesmo dia que iniciou
        if(minuto_fim<minuto_inicio) {
            minuto_fim += 60
            hora_fim -= 1
        }
        horas_de_duracao = hora_fim-hora_inicio
        minutos_de_duracao = minuto_fim-minuto_inicio


    } else if (hora_fim<=hora_inicio) { // Significa que o jogo terminou no dia seguinte
        const horas_parcial = 23-hora_inicio
        const minutos_parcial = 60-minuto_inicio

        horas_de_duracao = horas_parcial+hora_fim
        minutos_de_duracao = minutos_parcial+minuto_fim

        if (minutos_de_duracao>=60) {
            minutos_de_duracao -=60
            horas_de_duracao+=1

        }
    }

    return [horas_de_duracao,minutos_de_duracao]

}





main()