
// validação da letra inserida pela usuario
function verifica_letra (letra_digitada, letras_inseridas) {
    if (letra_digitada.length === 1 && letra_digitada.match(/[a-z]/)) {
        if (letras_inseridas.has(letra_digitada)) {
            console.log("\nEssa letra já foi inserida, tente novamente")
            return false
        } 
        else {
            letras_inseridas.add(letra_digitada)
            return true
        }
    } 
    else {
        console.log("\nIsso não é uma letra, tente novamente")
        return false
    }
}

// verificação se a letra inserida existe na palavra randomica
function verifica_letra_na_palavra (letra_digitada, palavra_randomica) {
    if (palavra_randomica.includes(letra_digitada)) {
        return true
    } else {
        return false
    }
}

// atualiza a palavra com a letra digitada
function atualiza_letra (palavra_oculta, letra_digitada, palavra_randomica) {
    let palavra_oculta_array = palavra_oculta.split('')
    for (let i = 0; i < palavra_randomica.length; i++) {
        if (letra_digitada === palavra_randomica[i]) {
            palavra_oculta_array[i] = letra_digitada
        }
    }

    return palavra_oculta_array.join('')
};

function atualiza_palavra () {

}



module.exports = {atualiza_letra, verifica_letra, verifica_letra_na_palavra}
