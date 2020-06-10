const prod1 = {
    nome: 'papa',
    preco: 45
}
// Factory simples

function criarPessoa(){
    return {
    nome: 'Ana',
    sobrenome: 'Silva'
}
}
console.log(criarPessoa())

function criarProduto(nome, preco){
   return{
    nome,
    preco,
    desconto: 0.1
   }
}
console.log(criarProduto('mesa', 200.90))