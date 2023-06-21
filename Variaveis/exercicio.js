//Variaveis 
let precoGasolina = 5.21;
let kmPorLitro = 10;
let kmRodado = 120;

let litrosConsumidos = kmRodado / kmPorLitro;
let valorPago = litrosConsumidos * precoGasolina;
console.log(valorPago.toFixed(2));

//output: 62.52