// Solicita o número ao usuário
let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

// Exibe a tabuada do número utilizando o laço for
console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
