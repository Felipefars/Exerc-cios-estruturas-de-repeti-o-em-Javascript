const palavras = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

let contagem = {};

// Usando for-of para contar as ocorrências das palavras
for (let palavra of palavras) {
    if (contagem[palavra]) {
        contagem[palavra] += 1;
    } else {
        contagem[palavra] = 1;
    }
}

// Usando for-in para imprimir o resultado
for (let palavra in contagem) {
    console.log(`${palavra}: ${contagem[palavra]} vez(es)`);
}
