const contador = document.getElementById('contagem')
let intervaloAtivo = null

function calcular(){
    const inicio = parseInt(document.getElementById('inicio').value)
    const chegada = parseInt(document.getElementById('chegada').value)
    const passos = parseInt(document.getElementById('passos').value)

    if (isNaN(inicio) || isNaN(chegada) || isNaN(passos)){
        contador.innerText = "Preencha todos os campos corretamente"
        return
    }

    if (passos <= 0){
        contador.innerText = "Passos deve ser maior que zero"
        return
    }

    if (intervaloAtivo){
        clearInterval(intervaloAtivo)
    }

    contador.innerHTML = ""
    let atual = inicio
    const crescente = inicio <= chegada
    let primeiro = true

    intervaloAtivo = setInterval(() => {
        const dentroDoLimite = crescente ? atual <= chegada : atual >= chegada

        if (!dentroDoLimite){
            clearInterval(intervaloAtivo)
            intervaloAtivo = null

            
            const ultimoSpan = contador.querySelector('.numero:last-of-type')
            const ultimoValor = ultimoSpan ? parseInt(ultimoSpan.innerText) : null

            if (ultimoValor !== chegada){
                contador.innerHTML += '<span class="seta">→</span>' +
                    `<span class="numero final">${chegada}</span>`
            } else {
                ultimoSpan.classList.add('final')
            }
            return
        }

        const ehUltimo = crescente ? (atual + passos) > chegada : (atual - passos) < chegada
        const classeExtra = ehUltimo ? 'final' : ''

        contador.innerHTML += (primeiro ? '' : '<span class="seta">→</span>') +
            `<span class="numero ${classeExtra}">${atual}</span>`

        primeiro = false
        atual = crescente ? atual + passos : atual - passos

    }, 500)
}