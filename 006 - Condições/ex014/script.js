function descreverFaixaEtaria(idade){
    if (idade <= 2) return "um bebê"
    if (idade <= 5) return "uma criança pequena"
    if (idade <= 12) return "uma criança"
    if (idade <= 17) return "um adolescente"
    if (idade <= 39) return "um jovem adulto"
    if (idade <= 59) return "um adulto de meia-idade"
    if (idade <= 74) return "uma pessoa idosa"
    return "uma pessoa muito idosa"
}

function montarPrompt(idade, genero){
    const faixa = descreverFaixaEtaria(idade)
    const generoTexto = genero === 'Não Binário' ? 'aparência andrógina' : `gênero ${genero.toLowerCase()}`

    return `Retrato fotográfico realista de ${faixa}, ${idade} anos de idade, ${generoTexto}, ` +
           `iluminação natural suave, fundo neutro desfocado, expressão serena, foco nítido no rosto, ` +
           `proporções faciais e corporais condizentes com a idade informada`
}

function verificar(){
    const data = new Date()
    const anoAtual = data.getFullYear()
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value)
    const erro = document.getElementById('mensagemErro')
    const resultado = document.getElementById('resultado')
    const foto = document.getElementById('foto')
    const loading = document.getElementById('loading')

    if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > anoAtual){
        erro.innerText = "Ano de nascimento inválido"
        erro.style.color = "red"
        resultado.innerText = ""
        foto.style.display = "none"
        loading.style.display = "none"
        return
    }

    erro.innerText = ""
    const idade = anoAtual - anoNascimento
    const userGen = document.getElementsByName('gen')
    let genero = ''

    if (userGen[0].checked) {
        genero = 'Masculino'
    } else if (userGen[1].checked) {
        genero = 'Feminino'
    } else if (userGen[2].checked) {
        genero = 'Não Binário'
    }

    resultado.innerText = `Idade: ${idade} anos, Gênero: ${genero}`

    const prompt = montarPrompt(idade, genero)
    const promptCodificado = encodeURIComponent(prompt)

    loading.style.display = "flex"
    foto.style.display = "none"

    foto.onload = () => {
        loading.style.display = "none"
        foto.style.display = "block"
    }
    foto.onerror = () => {
        loading.style.display = "none"
        erro.innerText = "Não foi possível carregar a imagem"
        erro.style.color = "red"
    }

    foto.src = `https://image.pollinations.ai/prompt/${promptCodificado}?width=512&height=512&nologo=true`
}