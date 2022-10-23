// Desafio - Lista de dependentes

// Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única para análise de outros departamentos de banco. 

const clientes = [
    {
    nome:"Andre",
    cpf: "115478523",
    dependentes:[{
      nome:"Sarah",
      parantesco: "filha",
      dataNascimento: "20/03/2011"
    },
      {
      nome: "Samia",
      parantesco: "filha",
      dataNascimento: "04/01/2014"
      }],
    },
    {
    nome:"Juliana",
    cpf: "04258702364",
    dependentes:[{
      nome:"Sophia",
      parantesco: "filha",
      dataNascimento: "20/30/08/2020"
    }],
  }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)