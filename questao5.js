function calcularAreaEPerimetroDoCirculo(raio) {
    if (raio <= 0) {
        return "O raio deve ser um número positivo.";
    }

    const area = Math.PI * raio * raio;
    const perimetro = 2 * Math.PI * raio;

    return {
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    };
}

const raio = parseFloat(prompt("Digite o raio do círculo:"));

const resultado = calcularAreaEPerimetroDoCirculo(raio);

if (typeof resultado === 'string') {
    console.log(resultado);
} else {
    console.log(`Área do círculo: ${resultado.area}`);
    console.log(`Perímetro do círculo: ${resultado.perimetro}`);
}
