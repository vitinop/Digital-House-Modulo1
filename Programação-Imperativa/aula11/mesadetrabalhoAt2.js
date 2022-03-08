// Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, 
// sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.
// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.


let arrayInicial=[0,1,2,3,4]


function imprimirInverso()
    {
        console.log (arrayInicial[4],arrayInicial[3],arrayInicial[2],arrayInicial[1],arrayInicial[0])
}

imprimirInverso()


function novoArrayInverso(){
    let novoArray= arrayInicial.reverse()
    console.log( novoArray)
}

novoArrayInverso()