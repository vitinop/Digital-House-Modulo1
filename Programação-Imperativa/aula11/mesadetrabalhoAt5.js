// Coleções de Filmes (e mais…)
// O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
// Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
// 	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
// Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.

// Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// Dica: revise o que faz o método de strings .toUpperCase().

let filme = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];
console.log('Este é sua escolha: ' + filme[2]);

console.log(filme[0].toUpperCase(), filme[1].toUpperCase(), filme[2].toUpperCase(), filme[3].toUpperCase(), filme[4].toUpperCase());
