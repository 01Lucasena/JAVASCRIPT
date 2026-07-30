function parimp(numero){
    if (numero%2==0){
        return `${numero} é par.`
    }else{
        return  `${numero} é impar.`
    }
}

let res = parimp(11)
console.log(res)