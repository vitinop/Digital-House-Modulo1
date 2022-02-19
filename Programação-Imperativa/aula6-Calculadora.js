//Calculadora

let somar = function(n1,n2){
    return n1+n2;
}

let subtrair = function(n1,n2){
    return n1-n2;
}

let multiplicar = function(n1,n2){
    return n1*n2
}

let dividir = function(n1,n2){
    // Verificar se a n2 é == 0
    if(n2==0){
        //executar se for true
        return 'Impossível fazer a divisão por 0'
    } else{
        return n1/n2
    }
}

console.log(somar(10,10));
console.log(subtrair(20,10));
console.log(multiplicar(5,5));
console.log(dividir(8,4));