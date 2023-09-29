let numero;
let menorValor = Infinity;
let maiorValor = -Infinity;
let soma = 0;

const N = parseInt(prompt("Digite a quantidade de números a serem analisados:"));

for (let i = 1; i <= N; i++) {
    numero = parseFloat(prompt(`Digite o ${i}º número:`));

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        i--; 
    } else {
        
        if (numero < menorValor) {
            menorValor = numero;
        }
        if (numero > maiorValor) {
            maiorValor = numero;
        }
        
        
        soma += numero;
    }
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${soma}`);
