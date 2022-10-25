// Desafio - cliente poupança

// Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupanças.

function cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldopoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldopoup = saldopoup
}

const isabelle = new clientePoupanca("Isabelle", "01245876325", "isa@luke.com", 100, 200)

console.log(isabelle)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldopoup += valor
}

isabelle.depositarPoup(30)

console.log(isabelle.saldopoup)

