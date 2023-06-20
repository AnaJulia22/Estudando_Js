//Variaveis 
let precoGasolina = 5.21;
let kmPorLitro = 10;
let kmRodado = 120;

let litrosConsumidos = kmRodado / kmPorLitro;
let valorPago = litrosConsumidos * precoGasolina;
console.log(valorPago.toFixed(2));

//output: 62.52

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

//Objeto
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome; 
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const ana = new Pessoa('Ana', 19);
console.log(ana);
ana.descrever();
new Pessoa('Renan', 30).descrever();

// output:
// Pessoa { nome: 'Ana', idade: 19 }
// Meu nome é Ana e minha idade é 19
// Meu nome é Renan e minha idade é 30

class Pessoa2 {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa2('Gabriel', 18).descrever();

//output: Nome: Gabriel; Idade: 18;

//Listas
const notas = [];
notas.push(10);
notas.push(9);
console.log(notas)

//output: [10, 9]

notas.pop()
notas.pop()
console.log(notas)

//output: []

for (let i = 0; i<10; i++) {
    notas.push(i)
}
console.log(notas)

//output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

class Aluno {
    nome;
    notas;

    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }
    
    aprovado(notas) {
        let soma = 0
    
        for (let a = 0; a < notas.length; a++) {
            const nota = notas[a];
            soma = soma + nota;
        }
    
        const media = soma / notas.length;
        return media;
    }

    situacao() {
        let media = this.aprovado(this.notas)
        if (media >= 7) {
            console.log(`${this.nome} foi aprovado com media ${media.toFixed(2)}`);    
        } else {
            console.log(`${this.nome} foi reprovado com media ${media.toFixed(2)}`);
        }
    }
}

const bia = new Aluno('Bia', [10, 8, 9.5])
const pedro = new Aluno('Pedro', [8, 5, 6])

console.log( bia, pedro)
console.log( bia.situacao(), pedro.situacao())