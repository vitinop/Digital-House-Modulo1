// Passo 1 (1,5 pontos)
// Crie uma função construtora que tenha como atributos: nome (string), quantidade de
// faltas (number) e notas (array de números).

// Passo 2 (1,5 pontos)
// Na função construtora crie o método calcularMedia que retorna a média de suas
// notas. Também terá um método chamado faltas, que simplesmente aumenta o número de
// faltas em 1. Crie alguns alunos para testar a sua função construtora.
function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;

  // Passo 2:
  this.calcularMedia = function () {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma = soma + this.notas[i];
    }

    return soma / this.notas.length;
  };

  this.adicionarFalta = function () {
    let faltasTotal = 0;
    faltasTotal = this.faltas + 1;
    return faltasTotal;
  };
}

const aluno1 = new Aluno("victor", 2, [9, 6, 2, 10]);
const aluno2 = new Aluno("thiago", 1, [5, 7, 9, 8]);
const aluno3 = new Aluno("rodrigo", 1, [9, 10, 9.5, 8.5]);
const aluno4 = new Aluno("wanderson", 1, [5, 7, 8, 8]);
const aluno5 = new Aluno("ronaldo", 0, [0, 10, 0, 10]);

// TESTANDO OS MÉTODOS DE MEDIA E DE FALTAS
console.log("Teste do aluno 2");
console.log(aluno2.calcularMedia());
console.log(aluno2.adicionarFalta());
console.log("Teste do aluno 5");
console.log(aluno5.calcularMedia());
console.log(aluno5.adicionarFalta());

// Passo 3 (1,5 pontos)
// crie o objeto literal curso que tem como atributos: nome do curso (string), nota de
// aprovação (number), faltas máximas (number) e uma lista de estudantes (um array
// composto pelos alunos criados no passo 2).

var alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

let curso = {
  nomeCurso: "Certified Tech Developer",
  notaAprovacao: 7,
  faltasMax: 2,
  estudantes: alunos,

  // Passo 4 (1,5 pontos)
  // Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
  // chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
  // propriedade lista de estudantes do objeto curso.

  criarAluno: function (nome, faltas, notas) {
    alunos.push(new Aluno(nome, faltas, notas));
    console.log("Aluno Adicionado com sucesso");

    return this.criarAluno;
  },

  // Passo 5 (2 pontos)
  // Crie um método para o objeto curso que receba um aluno (como parâmetro) e
  // retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
  // aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
  // faltas máximas. Se tiver a mesma quantidade de faltas permetidas, tem que estar 10% acima da nota de
  // aprovação.

consultaAlunoAprovacao: function(aluno){

    if(aluno.calcularMedia() >= this.notaAprovacao && aluno.faltas< this.faltasMax) {
        
        return true
    } 
    if (aluno.faltas === this.faltasMax && (aluno.calcularMedia() > this.notaAprovacao + this.notaAprovacao * 0.1) ){
        
        return true
    }
    else {
     
        return false
    }
},

  // Passo 6 (2 pontos)
  // Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
  // array de booleanos com os resultados se os alunos aprovaram ou não.


  resultadoBoleanAluno: function () {
    var resultado = [];
    for (let i = 0; i < this.estudantes.length; i++) {
      var aluno = this.estudantes[i].nome;
      resultado.push(aluno);
      resultado.push(this.consultaAlunoAprovacao(this.estudantes[i]));
    }
    return resultado
  },
};

console.log(curso.criarAluno("Messi", 0, [10, 7, 8, 9]));


console.log(curso.resultadoBoleanAluno());


