// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.
// Veja abaixo os requisitos do projeto:
// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos.

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão);

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

const prompt = require("prompt-sync")();

let tempoPadrao = 0;
let novoTempo = 0;
console.log(
  "Lista de pratos\n1 - Pipoca;\n2 - Macarrão;\n3 - Carne;\n4 - Feijão;\n5 - Brigadeiro"
);
let prato = +prompt(
  "Qual prato você gostaria de cozinhar? Insira o Numero do Prato:"
);

if (prato === 1) {
  tempoPadrao = 10;
  console.log(
    "O prato selecionado foi Pipoca e o tempo padrão é :" +
    tempoPadrao +
    " segundos"
  );
  const decisao = +prompt(
    "Gostaria de modifica o tempo padrão? Digite S ou N "
  );
  if (decisao === "N") {
    console.log("Prato pronto, bom apetite!!!")
  }
  if (decisao === "S") {{
    novoTempo = +prompt(
      "Insira quantos segundos você gostaria para o prato desejado"
    );
  }
    if (tempoPadrao > novoTempo) {
      // Novo tempo menor que o tempo padrão
      console.log("Tempo insuficiente, a comida está fria !");
    } else if (novoTempo >= tempoPadrao * 2) {
      // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
      console.log("A Comida queimou !");
    } else if (novoTempo >= tempoPadrao * 3)
      console.log("Parabens você ateou fogo no seu apartamento !");
    else console.log("Prato pronto, bom apetite!!!");
  }
}
  //
  // if( prato === 2){
  //     time=8
  // }
  // if( prato === 3){
  //     time=15
  // }
  // if( prato === 4){
  //     time=12
  // }
  // if( prato === 5){
  //     time=8
  // }
  else {
    console.log("Prato inexistente");
  }
