function somar(numero1=0, numero2=0){
    return numero1 + numero2
}

function subtrair(numero1=0, numero2=0){
    return numero1 - numero2
}

function mutiplicar(numero1=0, numero2=0){
    return numero1 * numero2
}

function dividir(numero1=0, numero2=0){
    return numero1 / numero2
}

function media(...numeros){
    let somaTotal = numeros.reduce((i,j) => somar(i, j), 0)
    return somaTotal /numeros.length
}

function fatorar(numero){
    let fat = 1
    let i = numero
    for(i; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log(media(10,7,9,6))
console.log(fatorar(5))