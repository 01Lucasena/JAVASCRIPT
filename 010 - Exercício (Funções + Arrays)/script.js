let lista = document.querySelector('select#lista')
let input = document.getElementById('numero')
let listaNumeros = []
let resposta = document.getElementById('resposta')

function inLista(n, l){
    return l.indexOf(Number(n)) != -1
}

function adicionarNumero(){
    let numero = parseInt(document.getElementById('numero').value)

    if (isNaN(numero) || numero < 0 || numero > 100){
        window.alert("Por favor, insira um número válido")
        return
    }

    if(!inLista(numero, listaNumeros)) {
        listaNumeros.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado.`
        lista.appendChild(item)
        resposta.innerHTML = ""
    } else {
        window.alert("Valor já encontrado na lista.")
    }
    
    input.value = ""
}

document.getElementById('numero').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarNumero()
    }
})

function executarCalculos(){
    if (listaNumeros.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = listaNumeros.length
        let maior = listaNumeros[0]
        let menor = listaNumeros[0]
        let soma = 0
        let media = 0

        for (let posicao in listaNumeros) {
            soma += listaNumeros[posicao]
            
            if (listaNumeros[posicao] > maior)
                maior = listaNumeros[posicao]
            if (listaNumeros[posicao] < menor)
                menor = listaNumeros[posicao]
        }

        media = soma / total

        resposta.innerHTML = ""
        resposta.innerHTML += `<p>Temos ${total} números cadastrados.</p>`
        resposta.innerHTML += `<p>Maior Valor: ${maior}, Menor Valor: ${menor}.</p>`
        resposta.innerHTML += `<p>Soma de todos os valores: ${soma}.</p>`
        resposta.innerHTML += `<p>Média de todos os valores: ${media}.</p>`
    }
}