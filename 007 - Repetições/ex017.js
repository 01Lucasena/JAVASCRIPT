let resposta

do {
    resposta = prompt('Quer continuar? [S/N]').toUpperCase();

    if (resposta !== 'S' && resposta !== 'N') {
        alert('Resposta inválida. Por favor, responda com S (Sim) ou N (Não).');
    }
} while (resposta !== 'N')