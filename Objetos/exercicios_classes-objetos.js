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