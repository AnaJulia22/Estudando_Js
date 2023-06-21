//Condicionais
const numero = 10;
const ePar = (numero % 2) === 0;

if (ePar) {
    console.log('É par');
} else {
    console.log('É ímpar');
}

let precoEtanol = 5.79;
precoGasolina = 5.66;
kmPorLitro = 10;
kmRodado = 100;
let tipoCombustivel = 'Etanol';
litrosConsumidos = kmRodado / kmPorLitro;
let valorGasto = Int16Array;

if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

//output: 57.90