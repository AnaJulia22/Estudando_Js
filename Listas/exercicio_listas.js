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