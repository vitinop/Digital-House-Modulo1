// Victor Luz 
// Matheus Emanuel 
// Anderson Borges 
// Natashy Iwamoto
// Luanderson Silva
// Tony Jonas 
// Werlon Lima

let alunos = [
    {nome: "Lean", anoLetivo: 27, notas: [0, 9, 8]},
    {nome: "Zezé", anoLetivo: 21, notas: [10, 2, 8]},
]


function propriedadeUnica(nome) {
  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    if (nome == aluno.nome) {
      console.log("Aluno encontrado");
      console.log(`
          Nome do aluno: ${aluno.nome}
          Ano Letivo: ${aluno.anoLetivo}
          Notas: ${aluno.notas}
          Média: ${(aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3}
          `);
      if ((aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3 >= 6)
        console.log("Aluno aprovado");
      else console.log("Aluno reprovado");
      return aluno;
    }
  }
  console.log("Aluno não encontrado");
}

propriedadeUnica("Zezé")
