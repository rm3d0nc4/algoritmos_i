import {ler_numero, input} from '../io_utils.js'

function main() {

    const instante1 = input('Digite o instante 1 no formato "dd/MM/aaaa hh:mm:ss": ')
    const instante2 = input('Digite o instante 2 no formato "dd/MM/aaaa hh:mm:ss": ')

    const [inicial, final] = ordernar_instantes(instante1, instante2)
    console.log(inicial)
    console.log(final)
    const [duracao_ano, duracao_mes, duracao_dia, duracao_hora, duracao_minuto, duracao_segundo] = extrair_intervalo1(inicial, final)

    let intervalo = `Intervalo: ${duracao_ano} anos, ${duracao_mes} meses, ${duracao_dia} dias,`
    intervalo += `\n    ${duracao_hora} horas, ${duracao_minuto} minutos e ${duracao_segundo} segundos `
    console.log(intervalo)
}


function extrair_intervalo1(inicial, final) {
    const [data_inicial, horario_inicial] = inicial.split(' ')

    let [dia_inicial, mes_inicial, ano_inicial] = data_inicial.split('/').map(Number)
    let [hora_inicial, minuto_inicial, segundo_inicial] = horario_inicial.split(':').map(Number) 

    const [data_final, horario_final] = final.split(' ')

    let [dia_final, mes_final, ano_final] = data_final.split('/').map(Number)
    let [hora_final, minuto_final, segundo_final] = horario_final.split(':').map(Number)

    let duracao_dia, duracao_mes, duracao_ano, duracao_hora, duracao_minuto, duracao_segundo

    if(segundo_final < segundo_inicial) {
        minuto_final -= 1
        segundo_final += 60
    }

    duracao_segundo = segundo_final - segundo_inicial

    if(minuto_final < minuto_inicial) {
        hora_final -= 1
        minuto_final += 60
    }

    duracao_minuto = minuto_final - minuto_inicial

    if(hora_final < hora_inicial) {
        dia_final -=1
        hora_final += 24
    }

    duracao_hora = hora_final - hora_inicial

    if(dia_final < dia_inicial) {
        mes_final -= 1
        dia_final += 30
    }

    duracao_dia = dia_final - dia_inicial

    if( mes_final < mes_inicial) {
        ano_final -= 1
        mes_final += 12
    }

    duracao_mes = mes_final - mes_inicial

    duracao_ano = ano_final - ano_inicial

    return [duracao_ano, duracao_mes, duracao_dia, duracao_hora, duracao_minuto, duracao_segundo]
}


function ordernar_instantes(instante1, instante2) {
    const [data_instante1, horario_instante1] = instante1.split(' ')
    let [dia_instante1, mes_instante1, ano_instante1] = data_instante1.split('/').map(Number)
    let [hora_instante1, minuto_instante1, segundo_instante1] = horario_instante1.split(':').map(Number) 

    const [data_instante2, horario_instante2] = instante2.split(' ')
    let [dia_instante2, mes_instante2, ano_instante2] = data_instante2.split('/').map(Number)
    let [hora_instante2, minuto_instante2, segundo_instante2] = horario_instante2.split(':').map(Number)

    let instante_inicial, instante_final

    if(ano_instante1 > ano_instante2) {
        instante_final = instante1
        instante_inicial = instante2

    } else if(ano_instante1 < ano_instante2) {
        instante_final = instante2
        instante_inicial = instante1

    } else {
        if(mes_instante1 > mes_instante2) {
            instante_final = instante1
            instante_inicial = instante2

        } else if(mes_instante1 < mes_instante2) {
            instante_final = instante2
            instante_inicial = instante1

        } else {
            if(dia_instante1 > dia_instante2) {
                instante_final = instante1
                instante_inicial = instante2

            } else if(dia_instante1 < dia_instante2) {
                instante_final = instante2
                instante_inicial = instante1

            } else {
                if(hora_instante1 > hora_instante2) {
                    instante_final = instante1
                    instante_inicial = instante2

                } else if(hora_instante1 < hora_instante2) {
                    instante_final = instante2
                    instante_inicial = instante1

                } else {
                    if(minuto_instante1 > minuto_instante2) {
                        instante_final = instante1
                        instante_inicial = instante2

                    } else if(minuto_instante1 < minuto_instante2) {
                        instante_final = instante2
                        instante_inicial = instante1

                    } else {
                        if(segundo_instante1 > segundo_instante2) {
                            instante_final = instante1
                            instante_inicial = instante2

                        } else {
                            instante_final = instante2
                            instante_inicial = instante1
                        }
                    }
                }
            }
        }
    }

    return [instante_inicial, instante_final]
}

main()