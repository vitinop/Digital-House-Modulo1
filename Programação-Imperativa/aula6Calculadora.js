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


function quadradoDoNumero(n1) {
    const quadrado = multiplicar(n1,n1);
    return quadrado;
}

console.log(quadradoDoNumero(5));



function mediaDeTresNumeros(n1, n2, n3) {
    const soma1 = somar(n1, n2);
    const soma2 = somar(soma1, n3);
    const media = dividir(soma2,3);
    return media;
}

console.log(mediaDeTresNumeros(1,2,3));


function calculaPorcentagem(valor, porcentagem) {
    const decimal = dividir(porcentagem, 100);
    const resultado = multiplicar(decimal, valor);
    return resultado;
}

console.log(calculaPorcentagem(300,15));
console.log(calculaPorcentagem(300, 120));


function geradorDePorcentagem(valorRelativo, valorBase) {
    const numerador = multiplicar(valorRelativo, 100);
    const resultado = dividir(numerador, valorBase);
    return resultado;
}

console.log(geradorDePorcentagem(2,200));
console.log(geradorDePorcentagem(100,100));




