const display = document.getElementById('display');

function inserirNumero(numero) {
    display.value += numero;
}

function inserirOperador(operador) {
    
    const ultimoChar = display.value.slice(-1);
    const operadores = ['+', '-', '*', '/'];

    if (display.value === '' && operador !== '-') {
        return; 
    }

    if (operadores.includes(ultimoChar)) {
        display.value = display.value.slice(0, -1) + operador;
    } else {
        display.value += operador;
    }
}

function limpar() {
    display.value = '';
}

function limparEntrada() {
    
    const partes = display.value.split(/([+\-*/])/);
    partes.pop();
    display.value = partes.join('');
}

function excluir() {
    display.value = display.value.slice(0, -1);
}

function inserirVirgula() {
    
    const partes = display.value.split(/[+\-*/]/);
    const ultimoNumero = partes[partes.length - 1];

    if (!ultimoNumero.includes(',')) {
        display.value += ',';
    }
}

function inverterSinal() {
    if (display.value === '') return;

    const partes = display.value.split(/([+\-*/])/);
    let ultimoNumero = partes[partes.length - 1];

    if (ultimoNumero === '') return;

    const valorInvertido = (parseFloat(ultimoNumero.replace(',', '.')) * -1)
        .toString()
        .replace('.', ',');

    partes[partes.length - 1] = valorInvertido;
    display.value = partes.join('');
}

function calcular() {
    try {
        const expressao = display.value.replace(/,/g, '.');
        let resultado = eval(expressao);

        if (!isFinite(resultado)) {
            display.value = 'Erro';
            return;
        }

        
        resultado = Math.round(resultado * 1000000) / 1000000;

        display.value = resultado.toString().replace('.', ',');
    } catch (error) {
        display.value = 'Erro';
    }
}