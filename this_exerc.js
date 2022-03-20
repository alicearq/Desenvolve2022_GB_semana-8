//const pessoa = {
//    nome: "Ana" ,
//    email: "a@email.com" ,
//    imprimeNome: function(){
//       console.log(`${pessoa.nome}`)
 // }
//}
//pessoa.imprimeNome()

//const pessoa = {
//   nome: "Ana" ,
 //   email: "a@email.com" ,
// imprimeNome: function(){
//        console.log(`${this.nome}`)
 //   }
//}
//pessoa.imprimeNome()

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
}

//const pessoa1 = {
   // nome: "Ana",
    //email: "a@email.com",
    //imprimeInfo: imprimeNomeEmail
//}
   
//const pessoa2 = {
 //   nome: "Paula",
  //  email: "p@email.com",
   // imprimeInfo: imprimeNomeEmail
//}
   
//pessoa1.imprimeInfo()
   //nome: Ana, email a@email.com
//pessoa2.imprimeInfo()
   //nome: Paula, email p@email.com

function Pessoa(nome, email){
    this.nome =nome
    this.email =email
    this.imprimeNomeEmail = function(){
    console.log(`nome: ${this.nome}, email: ${this.email}`)
}
}
const pessoa1 = new Pessoa("Ana", "a@email.com")
const pessoa2 = new Pessoa("Paula", "p@email.com")

pessoa1.imprimeNomeEmail()
// nome: Ana, email: a@email.com
pessoa2.imprimeNomeEmail()
// nome: Paula, email: p@email.com

function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
//  const cliente1 = {
//  nome: "Carlos",
//  email: "c@email.com"
//  }
   
//const cliente2 = {
//   nome: "Fred",
 //  email: "f@email.com"
// }

 //  imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

//imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
// const cliente1 = {
//   nome: "Carlos",
//   email: "c@email.com"
//  }
   
// const cliente2 = {
//    nome: "Fred",
//    email: "f@email.com"
//   }

//imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

//imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

function imprimeNomeEmail(tipoCliente, agencia){
   console.log(`
     ${tipoCliente} da agência ${agencia}:
     - nome: ${this.nome}, email: ${this.email}
     `)
  }
  
  const cliente1 = {
   nome: "Carlos",
   email: "c@email.com"
  }
  
  const cliente2 = {
   nome: "Fred",
   email: "f@email.com"
  }
const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com