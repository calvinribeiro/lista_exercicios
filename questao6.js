function calcularMontanteInvestimento(capitalInicial, taxaJurosMensal, tempoMeses) {
    if (capitalInicial <= 0 || taxaJurosMensal <= 0 || tempoMeses <= 0) {
        return "Os valores devem ser positivos.";
    }

    taxaJurosMensal /= 100;

    const montante = capitalInicial * Math.pow(1 + taxaJurosMensal, tempoMeses);
    return montante.toFixed(2);
}

const capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
const taxaJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (em percentual):"));
const tempoMeses = parseInt(prompt("Digite o tempo do investimento (em meses):"));

const resultado = calcularMontanteInvestimento(capitalInicial, taxaJurosMensal, tempoMeses);

if (typeof resultado === 'string') {
    console.log(resultado);
} else {
    console.log(`Montante do investimento: R$ ${resultado}`);
}
