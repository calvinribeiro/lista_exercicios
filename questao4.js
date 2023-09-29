let salarioInicial = 1000.0;

let percentualAumento = 0.015; // 1.5%

const anoInicio = 1995;

const anoAtual = new Date().getFullYear();

for (let ano = anoInicio; ano < anoAtual; ano++) {
    salarioInicial += salarioInicial * percentualAumento;
    percentualAumento *= 2; 
}

console.log(`O salário atual do funcionário em ${anoAtual} é de R$ ${salarioInicial.toFixed(2)}.`);

const novoSalarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

if (!isNaN(novoSalarioInicial)) {
    salarioInicial = novoSalarioInicial;

    percentualAumento = 0.015;
    
    for (let ano = anoInicio; ano < anoAtual; ano++) {
        salarioInicial += salarioInicial * percentualAumento;
        percentualAumento *= 2;
    }

    console.log(`O salário atual do funcionário em ${anoAtual} com o novo salário inicial é de R$ ${salarioInicial.toFixed(2)}.`);
} else {
    console.log("Salário inicial inválido.");
}
