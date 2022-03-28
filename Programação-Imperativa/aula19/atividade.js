
//função construtora do objeto cliente 
function CriarCliente(nome,numero,tipo,saldo) {
    this.nome = nome;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo
}


let contaTeste = new CriarCliente( 'Zezé da padaria','6666969','Conta Poupança',1.00)
console.log(contaTeste)


let cliente1  = new CriarCliente( 'Ramon Connell','1183971869','Conta Poupança',8675.00)
let cliente2 = new CriarCliente( 'Abigael Natte','5486273622','Conta Corrente',27771.00)
let cliente3 = new CriarCliente( 'Jarret Lafuente','9582019689','Conta Poupança',27363.00)
let cliente4 = new CriarCliente('Ansel Ardley','1761924656','Conta Poupança',32415.00)
let cliente5 = new CriarCliente('Jacki Shurmer','7401971607','Conta Poupança',18789.00)
let cliente6 = new CriarCliente('Jobi Mawtus','630841470','Conta Corrente',28776.00)
let cliente7 = new CriarCliente('Thomasin Latour','4223508636','Conta Corrente',2177.00)
let cliente8 = new CriarCliente('Lonnie Verheijden','185979521','Conta Poupança',25994.00)
let cliente9 = new CriarCliente('Alonso Wannan','3151956165','Conta Corrente',7601.00)
let cliente10 = new CriarCliente('Bendite Huggett','2138105881','Conta Poupança',33196.00)

var contas =[ cliente1,cliente2,cliente3,cliente4,cliente5,cliente6,cliente7,cliente8,cliente9,cliente10]
console.log(contas)

 let banco = {
   clientes: contas,
   listaClientes: function () {
     for (let i = 0; i < this.clientes.length; i++) {
       console.log(this.clientes[i]);
     }
   },
   consultarCliente(nome){
    for(let i = 0; i < this.clientes.length ; i++){
      const cliente = this.clientes[i];
      if(nome == cliente.nome){
        console.log("Cliente encontrado");
        console.log( cliente);        
        return cliente;
      } 
    }
    console.log ("Cliente não encontrado");
  },

  adicionarSaldoCliente(nome,valorDepositado){
    consultarCliente(nome)
    cliente.saldo=cliente.saldo+valorDepositado

    console.log(`Depósito realizado, seu novo saldo é:" ${cliente.saldo}`) 
    }
 };

banco.consultarCliente('Jacki Shurmer')
banco.adicionarSaldoCliente('Jacki Shurmer')



// Victor Luz 
// Matheus Emanuel 
// Anderson Borges 
// Natashy Iwamoto
// Luanderson Silva
// Tony Jonas 