function tabuada() {
    let numero = parseInt(document.getElementById('numero').value)
    let tabuada = document.getElementById('tabuada')

    if (isNaN(numero)){
        window.alert('Por favor, insira um número!')
    } else {
        let i = 1
        tabuada.innerHTML = ''
        while (i <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} X ${i} = ${numero*i}`
            tabuada.appendChild(item)
            i++
        }
    }
}

document.getElementById('numero').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        tabuada()
    }
})