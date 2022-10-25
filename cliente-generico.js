function cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new cliente("André", "45218762357", "meuprojeto@hmail.com", 100)

console.log(andre)
