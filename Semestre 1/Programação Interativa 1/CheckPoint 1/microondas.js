function microondas(comida, tempoMicro=0){
    let mostrador = "Iniciando microondas!"
    let pratoPronto = "Prato pronto. Bom apetite"
    let ehTempoValido = ( tempoMicro>=0 ) ? true : false
    let tempoInvalido = "Insira um tempo válido"
    let pratoInexistente = "Prato inexistente"
    comida = ( isNaN(comida) ) ? comida.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : comida

    let tempo = ( comida == 'pipoca' || comida == 1 ) ? 10
        : ( comida == 'macarrao' || comida == 2 ) ? 8
        : ( comida == 'carne' ||  comida == 3 ) ? 15
        : ( comida == 'feijao' || comida == 4 ) ? 12
        : ( comida == 'brigadeiro' || comida == 5 ) ? 8
        : pratoInexistente

    if ( ehTempoValido && !isNaN(tempo) ) {
        mostrador = ( tempoMicro<tempo ) ? "Tempo insuficiente. " + pratoPronto
            : ( tempoMicro >= tempo && tempoMicro <= 2*tempo ) ? pratoPronto
            : ( tempoMicro > 2*tempo && tempoMicro< 3*tempo ) ? "Comida queimou. " + pratoPronto
            : "KABUMM"
    } else {
        mostrador = ( isNaN(tempo) ) ? pratoInexistente
        : tempoInvalido
    }

    return(console.log(mostrador,end='\n'))
}
