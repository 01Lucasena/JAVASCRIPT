function atualizarInterface(hora) {
    const agora = new Date()
    const minuto = agora.getMinutes()
    const texto = document.getElementById('texto')
    const imagem = document.getElementById('imagem')
    const body = document.body

    if (hora >= 5 && hora < 12) {
        texto.innerHTML = `Bom dia! Agora são ${hora} horas e ${minuto} minutos.`
        body.style.background = 'skyblue'
        imagem.innerHTML = `<img src="img/manha.jpg" alt="manhã" style="width:500px; border-radius:20px;">`
    } else if (hora < 18) {
        texto.innerHTML = `Boa Tarde! Agora são ${hora} horas e ${minuto} minutos.`
        body.style.background = 'orange'
        imagem.innerHTML = `<img src="img/tarde.jpg" alt="tarde" style="width:500px; border-radius:20px;">`
    } else {
        texto.innerHTML = `Boa Noite! Agora são ${hora} horas e ${minuto} minutos.`
        body.style.background = 'darkblue'
        imagem.innerHTML = `<img src="img/noite.jpg" alt="noite" style="width:500px; border-radius:20px;">`
    }
}

function carregar() {
    const agora = new Date()
    atualizarInterface(agora.getHours())
}

function testar(horaFixa) {
    atualizarInterface(horaFixa)
}