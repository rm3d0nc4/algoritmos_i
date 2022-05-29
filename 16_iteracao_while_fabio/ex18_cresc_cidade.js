
function main() {
    let populacao_cidade_a = 200000 
    let populacao_cidade_b = 800000
    let contador_anos = 0

    while(populacao_cidade_a<populacao_cidade_b) {
        populacao_cidade_a+=(populacao_cidade_a*0.035)
        populacao_cidade_b+=(populacao_cidade_b*0.0135)
        contador_anos++
    }
    console.log(`Serão necessários ${contador_anos} anos para que o tamanho da população A ultrapasse a B`)
}

main()