const agora = new Date()
const hora =  agora.getHours()
const minutos = agora.getMinutes()

if (hora < 12) {
    console.log('Bom dia! Agora são ' + hora + ' horas e ' + minutos + ' minutos.')
}else if (hora < 18) {
    console.log('Boa tarde! Agora são ' + hora + ' horas e ' + minutos + ' minutos.')
}else{
    console.log('Boa noite! Agora são ' + hora + ' horas e ' + minutos + ' minutos.')
}
