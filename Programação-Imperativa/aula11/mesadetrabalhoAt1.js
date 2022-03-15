// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:

// Acessar elementos específicos de um array.
// Modificar cada um dos elementos de um array e imprimi-los no console.
// Adicionar elementos a um array.
// Extrair elementos de um array.
// Comparar elementos de um array com os elementos de outro. 


let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);

//  O resultado do console será : undefinied


let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]);

//  O resultado do console será : Spiderman





let str = 'uma string qualquer'

let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
//  O resultado do console será : uma string qualquer


