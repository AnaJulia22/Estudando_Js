const {gets, print} = require('C:\\Users\\anaju\\Estudando_Js\\import\\funcoes.js')
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const maiorNumero = gets();
    if (maiorNumero > maiorValorEncontrado) {
        maiorValorEncontrado = maiorNumero;
    }
}

print(maiorValorEncontrado);