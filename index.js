const input = require('readline-sync');
const dados = require ('./dados')
const {atualiza_letra, verifica_letra, verifica_letra_na_palavra} = require ('./func')



function play_forca () {
    
    // pegando uma palavra aleatoria da lista 
    let palavra_randomica = dados.frutas[Math.floor(Math.random() * dados.frutas.length)]
    // ocultando a palavra e mantendo so a primeira letra
    let primeira_letra = palavra_randomica[0]
    let palavra_oculta = primeira_letra + "_".repeat(palavra_randomica.length -1)
    //definindo a quantidade de jogadas
    let tentativas = 7
    let letras_inseridas = new Set([])
    let status = 'rodando'
    
    console.log("")
    console.log("-".repeat(20) + " JOGO DA FORCA " + "-".repeat(20))
    console.log(`\nAdivinhe o nome da fruta com ${palavra_randomica.length} letras`)
    
    
    // rodando o jogo
    while (status === 'rodando') {
        
        console.log(`\nFruta: ${palavra_oculta}`)
        let letra_digitada = input.question('\nAdivinhe uma letra: ').toLowerCase()

        if (verifica_letra(letra_digitada, letras_inseridas)) {

            if (verifica_letra_na_palavra(letra_digitada, palavra_randomica)) {
                palavra_oculta = atualiza_letra(palavra_oculta, letra_digitada, palavra_randomica)
                if (palavra_oculta === palavra_randomica) {
                    console.log(palavra_oculta)
                    console.log('--------------VOCÊ VENCEU!!-------------')
                    status = 'finalizado'
                }
            } else {
                tentativas--
                if (tentativas > 0) {
                    console.log(`\nOPÇÃO ERRADA! Você ainda tem ${tentativas} chance(s)!`)
                } else {
                    console.log('--------------VOCÊ PERDEU!!-------------')

                    status = "finalizado"
                }
                
            }
        }

    }
}

play_forca()