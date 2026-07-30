let numero = [8,20,10,16]
let posicao = 0


numero.sort((a, b) => a - b)
console.log(numero)

for (posicao; posicao < numero.length; posicao++){
    console.log(`${posicao}: ${numero[posicao]}`)
}

for (posicao in numero){
    console.log(`${posicao}: ${numero[posicao]}`)
}