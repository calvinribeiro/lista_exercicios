let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

const taxaCrescimentoA = 0.03; 
const taxaCrescimentoB = 0.015; 

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}

console.log(`Levará ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
